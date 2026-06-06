import { baseApi } from '../../store/baseApi'

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({ url: '/auth/register', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
    }),
    login: builder.mutation({
      query: (body) => ({ url: '/auth/login', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
    }),
    adminLogin: builder.mutation({
      query: (body) => ({ url: '/auth/admin/login', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({ url: '/auth/logout', method: 'POST' }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: [
        'Auth', 'User', 'Users', 'Equipment',
        'Job', 'Jobs', 'Article', 'Articles',
        'Dashboard', 'Contact',
      ],
    }),
    getMe: builder.query({
      query: () => '/auth/me',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['Auth'],
    }),
    verifyEmail: builder.query({
      query: (token) => `/auth/verify-email?token=${token}`,
      transformResponse: (response) => response.data ?? response,
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({ url: '/auth/forgot-password', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
    }),
    resetPassword: builder.mutation({
      query: (body) => ({ url: '/auth/reset-password', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
    }),
  }),
  overrideExisting: false,
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useAdminLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useVerifyEmailQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi
