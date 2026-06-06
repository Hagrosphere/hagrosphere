import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  accessToken: sessionStorage.getItem('access_token') ?? null,
  isAuthenticated: !!sessionStorage.getItem('access_token'),
  isInitialized: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload
      if (user) state.user = user
      state.accessToken = accessToken
      state.isAuthenticated = true
      state.isInitialized = true
      sessionStorage.setItem('access_token', accessToken)
    },
    setCurrentUser: (state, action) => {
      state.user = action.payload
      state.isAuthenticated = true
      state.isInitialized = true
    },
    clearAuth: (state) => {
      state.user = null
      state.accessToken = null
      state.isAuthenticated = false
      state.isInitialized = true
      sessionStorage.removeItem('access_token')
    },
    setInitialized: (state) => {
      state.isInitialized = true
    },
  },
})

export const { setCredentials, setCurrentUser, clearAuth, setInitialized } = authSlice.actions
export default authSlice.reducer

export const selectCurrentUser = (state) => state.auth.user
export const selectAccessToken = (state) => state.auth.accessToken
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectIsInitialized = (state) => state.auth.isInitialized
export const selectIsAdmin = (state) => ['ADMIN', 'SUPER_ADMIN'].includes(state.auth.user?.role ?? '')
export const selectIsSuperAdmin = (state) => state.auth.user?.role === 'SUPER_ADMIN'
export const selectUserRole = (state) => state.auth.user?.role
