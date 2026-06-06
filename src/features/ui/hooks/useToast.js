import { toast } from 'react-toastify'

export function useToast() {
  return {
    success: (message) => toast.success(message),
    error: (message) => toast.error(message),
    info: (message) => toast.info(message),
    warning: (message) => toast.warning(message),
    dismiss: (id) => toast.dismiss(id),
    dismissAll: () => toast.dismiss(),
  }
}
