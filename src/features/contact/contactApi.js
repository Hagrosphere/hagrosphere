import { baseApi } from '../../store/baseApi'

export const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    submitContact: builder.mutation({
      query: (body) => ({ url: '/contact', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: ['Dashboard', { type: 'Contact', id: 'LIST' }],
    }),
    getContactMessages: builder.query({
      query: (params) => ({ url: '/contact', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Contact', id })), { type: 'Contact', id: 'LIST' }]
          : [{ type: 'Contact', id: 'LIST' }],
    }),
    markMessageRead: builder.mutation({
      query: (id) => ({ url: `/contact/${id}/read`, method: 'PATCH' }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, id) => [{ type: 'Contact', id }, { type: 'Contact', id: 'LIST' }, 'Dashboard'],
    }),
    markMessageReplied: builder.mutation({
      query: ({ id, replyNote }) => ({ url: `/contact/${id}/replied`, method: 'PATCH', body: { replyNote } }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [{ type: 'Contact', id }, { type: 'Contact', id: 'LIST' }, 'Dashboard'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useSubmitContactMutation, useGetContactMessagesQuery,
  useMarkMessageReadMutation, useMarkMessageRepliedMutation,
} = contactApi
