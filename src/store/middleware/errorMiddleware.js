import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const errorMiddleware = (store) => (next) => (action) => {
  if (isRejectedWithValue()(action)) {
    const error = action.payload
    const status = error?.status
    const message = error?.data?.message

    if (status === 401 || (status === 400 && error?.data?.errors)) return next(action)

    let title = 'Something went wrong'
    let description

    if (status === 403) {
      title = 'Access denied'
      description = 'You do not have permission.'
    } else if (status === 404) {
      title = 'Not found'
      description = message ?? 'Resource not found.'
    } else if (status === 409) {
      title = 'Conflict'
      description = message ?? 'Record already exists.'
    } else if (status === 429) {
      title = 'Too many requests'
      description = 'Please wait and try again.'
    } else if (status === 500 || status === 'FETCH_ERROR') {
      title = 'Server error'
      description = 'Please try again shortly.'
    } else if (message) {
      description = message
    }

    toast.error(description ? `${title}: ${description}` : title)
  }

  return next(action)
}
