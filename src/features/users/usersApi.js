import { baseApi } from '../../store/baseApi'

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({ url: '/users', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ id }) => ({ type: 'User', id })), { type: 'Users', id: 'LIST' }]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUserStats: builder.query({
      query: () => '/users/stats',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['Users'],
    }),
    updateUserRole: builder.mutation({
      query: ({ id, role }) => ({ url: `/users/${id}/role`, method: 'PATCH', body: { role } }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [{ type: 'User', id }, { type: 'Users', id: 'LIST' }],
    }),
    updateUserStatus: builder.mutation({
      query: ({ id, status }) => ({ url: `/users/${id}/status`, method: 'PATCH', body: { status } }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [{ type: 'User', id }, { type: 'Users', id: 'LIST' }],
    }),
    createAdmin: builder.mutation({
      query: (body) => ({ url: '/users', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({ url: `/users/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Users', id: 'LIST' }, 'Dashboard'],
    }),

  }),
  overrideExisting: false,
})

export const {
  useGetUsersQuery, useGetUserStatsQuery,
  useUpdateUserRoleMutation, useUpdateUserStatusMutation, useDeleteUserMutation,
  useCreateAdminMutation,
} = usersApi
