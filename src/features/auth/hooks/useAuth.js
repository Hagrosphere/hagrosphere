import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCredentials, clearAuth } from '../slice/authSlice'
import {
  selectCurrentUser, selectIsAuthenticated, selectIsInitialized,
  selectIsAdmin, selectIsSuperAdmin, selectUserRole,
} from '../slice/authSlice'
import {
  useLoginMutation, useAdminLoginMutation, useLogoutMutation,
  useRegisterMutation, useForgotPasswordMutation, useResetPasswordMutation,
} from '../authApi'

export function useAuth() {
  const dispatch = useDispatch()

  const user = useSelector(selectCurrentUser)
  const isAuthenticated = useSelector(selectIsAuthenticated)
  const isInitialized = useSelector(selectIsInitialized)
  const isAdmin = useSelector(selectIsAdmin)
  const isSuperAdmin = useSelector(selectIsSuperAdmin)
  const role = useSelector(selectUserRole)

  const [loginMutation, { isLoading: isLoggingIn, error: loginError }] = useLoginMutation()
  const [adminLoginMutation, { isLoading: isAdminLoggingIn }] = useAdminLoginMutation()
  const [logoutMutation, { isLoading: isLoggingOut }] = useLogoutMutation()
  const [registerMutation, { isLoading: isRegistering }] = useRegisterMutation()
  const [forgotPasswordMutation, { isLoading: isSendingReset }] = useForgotPasswordMutation()
  const [resetPasswordMutation, { isLoading: isResettingPassword }] = useResetPasswordMutation()

  const login = useCallback(async (email, password) => {
    const result = await loginMutation({ email, password })
    if (result.data) {
      const { user, accessToken } = result.data
      dispatch(setCredentials({ user, accessToken }))
    }
    return result
  }, [loginMutation, dispatch])

  const adminLogin = useCallback(async (email, password) => {
    const result = await adminLoginMutation({ email, password })
    if (result.data) {
      const { user, accessToken } = result.data
      dispatch(setCredentials({ user, accessToken }))
    }
    return result
  }, [adminLoginMutation, dispatch])

  const logout = useCallback(async () => {
    const result = await logoutMutation()
    dispatch(clearAuth())
    return result
  }, [logoutMutation, dispatch])

  return {
    user, isAuthenticated, isInitialized, isAdmin, isSuperAdmin, role,
    login, adminLogin, logout,
    register: useCallback((data) => registerMutation(data), [registerMutation]),
    forgotPassword: useCallback((email) => forgotPasswordMutation({ email }), [forgotPasswordMutation]),
    resetPassword: useCallback((token, password) => resetPasswordMutation({ token, password }), [resetPasswordMutation]),
    isLoggingIn, isAdminLoggingIn, isLoggingOut,
    isRegistering, isSendingReset, isResettingPassword, loginError,
  }
}
