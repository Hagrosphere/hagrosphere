import { isFulfilled } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { setCurrentUser, clearAuth } from '../../features/auth/slice/authSlice'

export const authMiddleware = (store) => (next) => (action) => {
  const result = next(action)

  if (isFulfilled()(action)) {
    const endpoint = action.meta?.arg?.endpointName

    if (endpoint === 'adminLogin' || endpoint === 'login') {
      const payload = action.payload
      const user = payload?.user
      if (user) {
        toast.success(`Welcome back, ${user.firstName}!`)
      }
    }

    if (endpoint === 'logout') {
      store.dispatch(clearAuth())
      toast.success('Signed out successfully')
    }

    if (endpoint === 'register') {
      toast.success('Account created! Please verify your email.')
    }

    if (endpoint === 'getMe') {
      const user = action.payload
      if (user?.id) {
        store.dispatch(setCurrentUser(user))
      }
    }
  }

  return result
}
