import {
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { PiWarehouse } from "react-icons/pi";
import { IoClose, IoRefresh } from "react-icons/io5";
import { MdEmail, MdPhone } from "react-icons/md";
import { useState } from "react";
import { Countup } from "../components";
import { useDashboard } from "../features/dashboard/hooks/useDashboard";
import { useContact } from "../features/contact/hooks/useContact";
import { toast } from "react-toastify";

const Badge = ({ label, colorClass, bgClass }) => (
  <span
    className={`text-[11px] font-semibold px-2 py-1 rounded-full ${bgClass} ${colorClass}`}
  >
    {label}
  </span>
);

const Divider = () => <div className="border-b border-[#F0F0F0]" />;

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white border border-[#ECECEC] rounded-2xl overflow-hidden ${className}`}
  >
    {children}
  </div>
);

const AdminDashboard = () => {
  const { stats, recent, isOverviewLoading, refetchOverview } = useDashboard();
  const { markRead, markReplied } = useContact({ admin: true });
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyNote, setReplyNote] = useState("");
  const [showReplyEmail, setShowReplyEmail] = useState(false);

  const tagMap = {
    Equipment: { bgClass: "bg-[#E8F0FE]", colorClass: "text-[#3B5BDB]" },
    User: { bgClass: "bg-[#FFF3E0]", colorClass: "text-[#E65100]" },
    Job: { bgClass: "bg-[#E8F5E9]", colorClass: "text-[#2E7D32]" },
  };

  const statCards = [
    {
      id: 1,
      title: "Total Equipment",
      value: stats?.equipment?.total ?? 0,
      change: `${stats?.equipment?.available ?? 0} available`,
      percentage: "Live",
      icon: <PiWarehouse className="text-[#3B82F6] text-[22px]" />,
      iconBg: "bg-[#EEF4FF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 2,
      title: "Active Jobs",
      value: stats?.jobs?.open ?? 0,
      change: `${stats?.jobs?.total ?? 0} total`,
      percentage: "Live",
      icon: <HiOutlineBriefcase className="text-[#A855F7] text-[22px]" />,
      iconBg: "bg-[#F5EDFF]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 3,
      title: "Total Users",
      value: stats?.users?.total ?? 0,
      change: `+${stats?.users?.thisMonth ?? 0} this month`,
      percentage: `+${stats?.users?.growthPercent ?? 0}%`,
      icon: <HiOutlineUsers className="text-[#22C55E] text-[22px]" />,
      iconBg: "bg-[#ECFDF3]",
      percentageBg: "bg-[#EAFBF1]",
      percentageText: "text-[#22C55E]",
    },
    {
      id: 4,
      title: "Unread Messages",
      value: stats?.messages?.unread ?? 0,
      change: "Requires review",
      percentage: "Action needed",
      icon: (
        <HiOutlineExclamationCircle className="text-[#F59E0B] text-[22px]" />
      ),
      iconBg: "bg-[#FFF7ED]",
      percentageBg: "bg-[#FFF4E5]",
      percentageText: "text-[#F59E0B]",
    },
  ];

  const handleMessageClick = (msg) => {
    setSelectedMessage(msg);
    setReplyNote("");
    setShowReplyEmail(false);
    if (msg.status === "UNREAD") {
      markRead(msg.id)
        .unwrap()
        .catch(() => {});
    }
  };

  const handleCloseModal = () => {
    setSelectedMessage(null);
    setReplyNote("");
    setShowReplyEmail(false);
  };

  const handleMarkReplied = async () => {
    if (!selectedMessage) return;
    try {
      await markReplied(selectedMessage.id, replyNote).unwrap();
      toast.success("Message marked as replied");
      handleCloseModal();
      refetchOverview();
    } catch (error) {
      toast.error("Failed to update message status");
    }
  };

  const handleReplyViaEmail = () => {
    if (!selectedMessage) return;
    const subject = `Re: ${selectedMessage.subject}`;
    const body = `Hi ${selectedMessage.name},\n\nThank you for contacting Hagrosphere.\n\n[Your response here]\n\nBest regards,\nHagrosphere Team`;
    const mailtoLink = `mailto:${selectedMessage.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  if (isOverviewLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
      </div>
    );
  }

  return (
    <div className="w-full pt-3">
      {/* Header with Refresh Button */}
      <div className="flex items-end justify-end mb-4">
        <button
          onClick={() => {
            refetchOverview();
            toast.info("Dashboard refreshed");
          }}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#6B7280] hover:bg-bg-btn-primary cursor-pointer font-inter rounded-lg transition-colors bg-bg-main text-white"
        >
          <IoRefresh className="text-lg" />
          Refresh
        </button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-3 md:gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statCards.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-[#ECECEC] font-inter bg-white p-3 shadow-[0px_1px_2px_rgba(16,24,40,0.04)]"
          >
            <div className="flex items-start justify-between mb-4 md:mb-6">
              <div
                className={`flex h-7 w-7 md:h-9 md:w-9 items-center justify-center rounded-xl ${item.iconBg}`}
              >
                {item.icon}
              </div>
              <div
                className={`rounded-full px-3 py-1 text-xs md:font-medium ${item.percentageBg} ${item.percentageText}`}
              >
                {item.percentage}
              </div>
            </div>
            <div>
              <h2 className="mb-2 text-xl md:text-2xl font-bold leading-none text-[#111827]">
                <Countup end={item.value} duration={1400} />
              </h2>
              <p className="mb-4 text-xs md:text-sm font-medium text-[#6B7280]">
                {item.title}
              </p>
              <div className="flex items-center gap-1 text-xs md:text-sm">
                <span
                  className={
                    item.id === 4
                      ? "font-medium text-[#6B7280]"
                      : "text-[#9CA3AF]"
                  }
                >
                  {item.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="w-full my-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 font-inter">
          {/* Recent Equipment */}
          <Card>
            <div className="flex items-center justify-between px-4.5 py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">
                  Recent Equipment
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  Latest equipment listings
                </p>
              </div>
              <Badge
                label={`${stats?.equipment?.total ?? 0} total`}
                colorClass="text-[#B45309]"
                bgClass="bg-[#FFF4E5]"
              />
            </div>
            <Divider />
            {(recent?.equipment ?? []).slice(0, 3).map((e, i, arr) => (
              <div key={e.id ?? i}>
                <div className="flex items-start gap-3 px-4.5 py-3.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Badge label="Equipment" {...tagMap.Equipment} />
                    </div>
                    <p className="font-semibold text-sm py-1.5 text-[#111]">
                      {e.name}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      {e.location ?? "—"}
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      e.status === "AVAILABLE"
                        ? "bg-[#F0FDF4] text-[#16A34A]"
                        : "bg-[#FFF7ED] text-[#D97706]"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.equipment ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">
                No equipment yet
              </p>
            )}
          </Card>

          {/* Recent Activity */}
          <Card>
            <div className="flex items-center justify-between px-[18px] py-4">
              <div>
                <p className="font-bold text-[15px] text-[#111]">
                  Recent Users
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  Latest registrations
                </p>
              </div>
            </div>
            <Divider />
            <div className="py-1.5">
              {(recent?.users ?? []).slice(0, 4).map((u, i) => (
                <div
                  key={u.id ?? i}
                  className="flex items-start gap-3 px-[18px] py-[11px]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#22C55E] mt-[5px] shrink-0" />
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {u.firstName} {u.lastName}
                    </p>
                    <p className="text-xs text-[#6B7280]">{u.email}</p>
                    <p className="text-[11px] text-[#9CA3AF] mt-0.5">
                      {u.role}
                    </p>
                  </div>
                </div>
              ))}
              {(recent?.users ?? []).length === 0 && (
                <p className="text-center text-[#9CA3AF] text-sm py-6">
                  No users yet
                </p>
              )}
            </div>
          </Card>
        </div>
      </section>

      <section className="w-full mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 font-inter">
          {/* Recent Jobs */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">Recent Jobs</p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                Latest job postings
              </p>
            </div>
            <Divider />
            {(recent?.jobs ?? []).slice(0, 4).map((j, i, arr) => (
              <div key={j.id ?? i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {j.title}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">{j.company}</p>
                    <p className="text-xs text-[#9CA3AF]">{j.location}</p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      j.status === "OPEN"
                        ? "bg-[#F0FDF4] text-[#16A34A]"
                        : "bg-[#F3F4F6] text-[#6B7280]"
                    }`}
                  >
                    {j.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.jobs ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">
                No jobs yet
              </p>
            )}
          </Card>

          {/* Recent Articles */}
          <Card>
            <div className="px-4.5 py-4">
              <p className="font-bold text-[15px] text-[#111]">
                Recent Articles
              </p>
              <p className="text-xs text-[#9CA3AF] mt-0.5">Latest content</p>
            </div>
            <Divider />
            {(recent?.articles ?? []).slice(0, 4).map((a, i, arr) => (
              <div key={a.id ?? i}>
                <div className="flex items-center justify-between px-4.5 py-3">
                  <div>
                    <p className="font-semibold text-[13px] text-[#111]">
                      {a.title}
                    </p>
                    <p className="text-xs text-[#9CA3AF]">
                      {a.viewCount ?? 0} views
                    </p>
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      a.status === "PUBLISHED"
                        ? "bg-[#F0FDF4] text-[#16A34A]"
                        : "bg-[#FFF7ED] text-[#D97706]"
                    }`}
                  >
                    {a.status}
                  </span>
                </div>
                {i < arr.length - 1 && <Divider />}
              </div>
            ))}
            {(recent?.articles ?? []).length === 0 && (
              <p className="text-center text-[#9CA3AF] text-sm py-6">
                No articles yet
              </p>
            )}
          </Card>
        </div>
      </section>

      {/* Recent Contact Messages */}
      <section className="w-full mb-6">
        <Card>
          <div className="px-4.5 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-[15px] text-[#111]">
                  Recent Contact Messages
                </p>
                <p className="text-xs text-[#9CA3AF] mt-0.5">
                  Latest inquiries from users
                </p>
              </div>
              <Badge
                label={`${stats?.messages?.unread ?? 0} unread`}
                colorClass="text-[#DC2626]"
                bgClass="bg-[#FEF2F2]"
              />
            </div>
          </div>
          <Divider />
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[800px]">
              <thead className="bg-[#F9FAFB] border-b border-[#F0F0F0]">
                <tr>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Name
                  </th>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Email
                  </th>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Subject
                  </th>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Message
                  </th>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Date
                  </th>
                  <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {(recent?.contactMessages ?? []).map((msg, i, arr) => (
                  <tr
                    key={msg.id ?? i}
                    className={`hover:bg-gray-50 cursor-pointer transition-colors ${i < arr.length - 1 ? "border-b border-[#F0F0F0]" : ""}`}
                    onClick={() => handleMessageClick(msg)}
                  >
                    <td className="px-4.5 py-3 text-[#111] font-medium whitespace-nowrap">
                      {msg.name}
                    </td>
                    <td className="px-4.5 py-3 text-[#6B7280] whitespace-nowrap">
                      {msg.email}
                    </td>
                    <td className="px-4.5 py-3 text-[#111] font-medium whitespace-nowrap">
                      {msg.subject}
                    </td>
                    <td className="px-4.5 py-3 text-[#6B7280]">
                      <div className="max-w-xs truncate" title={msg.message}>
                        {msg.message?.substring(0, 50)}
                        {msg.message?.length > 50 ? "..." : ""}
                      </div>
                    </td>
                    <td className="px-4.5 py-3 text-[#6B7280] text-xs whitespace-nowrap">
                      {new Date(msg.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4.5 py-3 whitespace-nowrap">
                      <span
                        className={`text-[11px] font-semibold px-2 py-1 rounded-full ${
                          msg.status === "UNREAD"
                            ? "bg-[#FEF2F2] text-[#DC2626]"
                            : msg.status === "READ"
                              ? "bg-[#FFF7ED] text-[#EA580C]"
                              : "bg-[#F0FDF4] text-[#16A34A]"
                        }`}
                      >
                        {msg.status}
                      </span>
                    </td>
                  </tr>
                ))}
                {(recent?.contactMessages ?? []).length === 0 && (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center text-[#9CA3AF] text-sm py-8"
                    >
                      No contact messages yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </section>

      {/* Contact Message Detail Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F0F0]">
              <div>
                <h3 className="text-lg font-bold text-[#111]">
                  Contact Message Details
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Received on{" "}
                  {new Date(selectedMessage.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    },
                  )}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <IoClose className="text-2xl text-[#6B7280]" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Status Badge */}
              <div className="mb-5">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                    selectedMessage.status === "UNREAD"
                      ? "bg-[#FEF2F2] text-[#DC2626]"
                      : selectedMessage.status === "READ"
                        ? "bg-[#FFF7ED] text-[#EA580C]"
                        : "bg-[#F0FDF4] text-[#16A34A]"
                  }`}
                >
                  {selectedMessage.status}
                </span>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                    Full Name
                  </label>
                  <p className="text-base font-semibold text-[#111] mt-1">
                    {selectedMessage.name}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide flex items-center gap-1">
                      <MdEmail className="text-sm" />
                      Email
                    </label>
                    <p className="text-sm text-[#111] mt-1">
                      <a
                        href={`mailto:${selectedMessage.email}`}
                        className="hover:text-bg-btn-primary"
                      >
                        {selectedMessage.email}
                      </a>
                    </p>
                  </div>

                  {selectedMessage.phone && (
                    <div>
                      <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide flex items-center gap-1">
                        <MdPhone className="text-sm" />
                        Phone
                      </label>
                      <p className="text-sm text-[#111] mt-1">
                        <a
                          href={`tel:${selectedMessage.phone}`}
                          className="hover:text-bg-btn-primary"
                        >
                          {selectedMessage.phone}
                        </a>
                      </p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                    Subject
                  </label>
                  <p className="text-base font-semibold text-[#111] mt-1">
                    {selectedMessage.subject}
                  </p>
                </div>
              </div>

              {/* Message Content */}
              <div className="bg-[#F9FAFB] rounded-lg p-4 mb-5">
                <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2 block">
                  Message
                </label>
                <p className="text-sm text-[#111] leading-relaxed whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              {/* Reply Note (if exists) */}
              {selectedMessage.replyNote && (
                <div className="bg-[#F0FDF4] border border-[#86EFAC] rounded-lg p-4 mb-5">
                  <label className="text-xs font-semibold text-[#16A34A] uppercase tracking-wide mb-2 block">
                    Reply Note
                  </label>
                  <p className="text-sm text-[#166534] leading-relaxed">
                    {selectedMessage.replyNote}
                  </p>
                  {selectedMessage.repliedAt && (
                    <p className="text-xs text-[#16A34A] mt-2">
                      Replied on{" "}
                      {new Date(selectedMessage.repliedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        },
                      )}
                    </p>
                  )}
                </div>
              )}

              {/* Add Reply Note (if not replied yet) */}
              {selectedMessage.status !== "REPLIED" && (
                <div>
                  <label className="text-sm font-semibold text-[#111] mb-2 block">
                    Add Reply Note (Optional)
                  </label>
                  <textarea
                    value={replyNote}
                    onChange={(e) => setReplyNote(e.target.value)}
                    placeholder="Add internal notes about your reply to this message..."
                    className="w-full h-24 px-4 py-3 border border-[#E5E7EB] rounded-lg text-sm font-inter focus:outline-none focus:ring-2 focus:ring-bg-btn-primary resize-none"
                  />
                </div>
              )}

              {/* Quick Reply Actions */}
              <div className="mt-4 p-4 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg">
                <p className="text-sm font-semibold text-[#0369A1] mb-3 flex items-center gap-2">
                  <MdEmail className="text-lg" />
                  Quick Reply Options
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleReplyViaEmail}
                    className="flex items-center gap-2 text-sm text-[#0369A1] hover:text-[#075985] font-medium"
                  >
                    <MdEmail />
                    Reply via Email Client (Opens {selectedMessage.email})
                  </button>
                  {selectedMessage.phone && (
                    <a
                      href={`tel:${selectedMessage.phone}`}
                      className="flex items-center gap-2 text-sm text-[#0369A1] hover:text-[#075985] font-medium"
                    >
                      <MdPhone />
                      Call {selectedMessage.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-[#F0F0F0] bg-[#F9FAFB]">
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 text-sm font-medium text-[#6B7280] hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
              {selectedMessage.status !== "REPLIED" && (
                <button
                  onClick={handleMarkReplied}
                  className="px-5 py-2 text-sm font-medium text-white bg-bg-btn-primary hover:bg-opacity-90 rounded-lg transition-colors"
                >
                  Mark as Replied
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
