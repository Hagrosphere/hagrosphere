import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn, MdWork } from "react-icons/md";
import { IoClose, IoCheckmarkCircle } from "react-icons/io5";
import { useJobApplications } from "../features/jobs/hooks/useJobApplications";
import { toast } from "react-toastify";

const AdminJobApplications = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  
  const { applications, meta, isLoading, setFilters, updateStatus } = useJobApplications();

  const handleApplicationClick = (app) => {
    setSelectedApplication(app);
  };

  const handleCloseModal = () => {
    setSelectedApplication(null);
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateStatus(id, newStatus).unwrap();
      toast.success(`Application marked as ${newStatus}`);
      handleCloseModal();
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "PENDING":
        return "bg-[#FFF7ED] text-[#EA580C]";
      case "REVIEWED":
        return "bg-[#F0F9FF] text-[#0369A1]";
      case "SHORTLISTED":
        return "bg-[#FFF4E5] text-[#B45309]";
      case "ACCEPTED":
        return "bg-[#F0FDF4] text-[#16A34A]";
      case "REJECTED":
        return "bg-[#FEF2F2] text-[#DC2626]";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="border-t-4 border-b-4 rounded-full animate-spin h-10 w-10 border-bg-btn-primary" />
      </div>
    );
  }

  return (
    <div className="w-full pt-3">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#111]">Job Applications</h1>
        <p className="text-sm text-[#6B7280] mt-1">
          View and manage all job applications
        </p>
      </div>

      {/* Filter */}
      <div className="mb-6 flex items-center gap-4">
        <label className="text-sm font-medium text-[#111]">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setFilters({ status: e.target.value || undefined, page: 1 });
          }}
          className="px-4 py-2 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bg-btn-primary"
        >
          <option value="">All Applications</option>
          <option value="PENDING">Pending</option>
          <option value="REVIEWED">Reviewed</option>
          <option value="SHORTLISTED">Shortlisted</option>
          <option value="ACCEPTED">Accepted</option>
          <option value="REJECTED">Rejected</option>
        </select>
        <span className="text-sm text-[#6B7280]">
          Total: {meta?.total || 0} applications
        </span>
      </div>

      {/* Applications Table */}
      <div className="bg-white border border-[#ECECEC] rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#F9FAFB] border-b border-[#F0F0F0]">
              <tr>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Applicant
                </th>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Job Title
                </th>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Experience
                </th>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-4.5 py-3 text-left text-xs font-semibold text-[#6B7280] uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, i, arr) => (
                <tr
                  key={app.id}
                  className={`hover:bg-gray-50 cursor-pointer transition-colors ${
                    i < arr.length - 1 ? "border-b border-[#F0F0F0]" : ""
                  }`}
                  onClick={() => handleApplicationClick(app)}
                >
                  <td className="px-4.5 py-3">
                    <div>
                      <p className="text-[#111] font-medium">{app.fullName}</p>
                      <p className="text-xs text-[#6B7280]">{app.email}</p>
                    </div>
                  </td>
                  <td className="px-4.5 py-3">
                    <div>
                      <p className="text-[#111] font-medium">{app.job?.title}</p>
                      <p className="text-xs text-[#6B7280]">{app.job?.company}</p>
                    </div>
                  </td>
                  <td className="px-4.5 py-3 text-[#6B7280]">
                    {app.currentLocation}
                  </td>
                  <td className="px-4.5 py-3 text-[#6B7280]">
                    {app.yearsExperience} years
                  </td>
                  <td className="px-4.5 py-3 text-[#6B7280] text-xs">
                    {new Date(app.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </td>
                  <td className="px-4.5 py-3">
                    <span
                      className={`text-[11px] font-semibold px-2 py-1 rounded-full ${getStatusColor(
                        app.status
                      )}`}
                    >
                      {app.status}
                    </span>
                  </td>
                </tr>
              ))}
              {applications.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center text-[#9CA3AF] text-sm py-8"
                  >
                    No applications yet
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#F0F0F0]">
              <div>
                <h3 className="text-lg font-bold text-[#111]">
                  Application Details
                </h3>
                <p className="text-xs text-[#9CA3AF] mt-1">
                  Applied on{" "}
                  {new Date(selectedApplication.createdAt).toLocaleDateString(
                    "en-US",
                    {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    }
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
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full ${getStatusColor(
                    selectedApplication.status
                  )}`}
                >
                  {selectedApplication.status}
                </span>
              </div>

              {/* Job Information */}
              <div className="mb-6 p-4 bg-[#F9FAFB] rounded-lg">
                <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2 block">
                  Applied For
                </label>
                <p className="text-lg font-bold text-[#111]">
                  {selectedApplication.job?.title}
                </p>
                <p className="text-sm text-[#6B7280]">
                  {selectedApplication.job?.company}
                </p>
              </div>

              {/* Applicant Information */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                    Full Name
                  </label>
                  <p className="text-base font-semibold text-[#111] mt-1">
                    {selectedApplication.fullName}
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
                        href={`mailto:${selectedApplication.email}`}
                        className="hover:text-bg-btn-primary"
                      >
                        {selectedApplication.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide flex items-center gap-1">
                      <MdPhone className="text-sm" />
                      Phone
                    </label>
                    <p className="text-sm text-[#111] mt-1">
                      <a
                        href={`tel:${selectedApplication.phone}`}
                        className="hover:text-bg-btn-primary"
                      >
                        {selectedApplication.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide flex items-center gap-1">
                      <MdLocationOn className="text-sm" />
                      Current Location
                    </label>
                    <p className="text-sm text-[#111] mt-1">
                      {selectedApplication.currentLocation}
                    </p>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide flex items-center gap-1">
                      <MdWork className="text-sm" />
                      Years of Experience
                    </label>
                    <p className="text-sm text-[#111] mt-1">
                      {selectedApplication.yearsExperience} years
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">
                    Availability
                  </label>
                  <p className="text-sm text-[#111] mt-1">
                    {selectedApplication.availability}
                  </p>
                </div>
              </div>

              {/* Cover Letter */}
              <div className="bg-[#F9FAFB] rounded-lg p-4 mb-5">
                <label className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide mb-2 block">
                  Cover Letter
                </label>
                <p className="text-sm text-[#111] leading-relaxed whitespace-pre-wrap">
                  {selectedApplication.coverLetter}
                </p>
              </div>

              {/* Quick Actions */}
              <div className="mt-4 p-4 bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg">
                <p className="text-sm font-semibold text-[#0369A1] mb-3 flex items-center gap-2">
                  <MdEmail className="text-lg" />
                  Quick Actions
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`mailto:${selectedApplication.email}?subject=Re: Application for ${selectedApplication.job?.title}`}
                    className="flex items-center gap-2 text-sm text-[#0369A1] hover:text-[#075985] font-medium"
                  >
                    <MdEmail />
                    Email Applicant
                  </a>
                  <a
                    href={`tel:${selectedApplication.phone}`}
                    className="flex items-center gap-2 text-sm text-[#0369A1] hover:text-[#075985] font-medium"
                  >
                    <MdPhone />
                    Call {selectedApplication.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-[#F0F0F0] bg-[#F9FAFB]">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#111]">
                  Change Status:
                </label>
                <select
                  value={selectedApplication.status}
                  onChange={(e) =>
                    handleStatusChange(selectedApplication.id, e.target.value)
                  }
                  className="px-3 py-1.5 border border-[#E5E7EB] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-bg-btn-primary"
                >
                  <option value="PENDING">Pending</option>
                  <option value="REVIEWED">Reviewed</option>
                  <option value="SHORTLISTED">Shortlisted</option>
                  <option value="ACCEPTED">Accepted</option>
                  <option value="REJECTED">Rejected</option>
                </select>
              </div>
              <button
                onClick={handleCloseModal}
                className="px-5 py-2 text-sm font-medium text-[#6B7280] hover:bg-gray-200 rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobApplications;
