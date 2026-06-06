import { IoClose, IoWarningOutline } from "react-icons/io5";

const DeleteModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  itemName,
  isDeleting,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-inter">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-md mx-auto overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">
            {title || "Confirm Deletion"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IoClose size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          <div className="flex gap-4">
            <div className="shrink-0">
              <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                <IoWarningOutline size={24} className="text-red-600" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700 mb-2">
                {message ||
                  "Are you sure you want to delete this item? This action cannot be undone."}
              </p>
              {itemName && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    {itemName}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 px-4 py-2.5 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
