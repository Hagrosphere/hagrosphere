import { baseApi } from '../../store/baseApi'

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHealth: builder.query({ query: () => '/admin/health' }),
    getSettings: builder.query({
      query: (group) => ({ url: '/admin/settings', params: group ? { group } : {} }),
      providesTags: ['Settings'],
    }),
    updateSetting: builder.mutation({
      query: ({ key, value }) => ({ url: `/admin/settings/${key}`, method: 'PATCH', body: { value } }),
      invalidatesTags: ['Settings'],
    }),
    bulkUpdateSettings: builder.mutation({
      query: (settings) => ({ url: '/admin/settings', method: 'PATCH', body: { settings } }),
      invalidatesTags: ['Settings'],
    }),
    subscribeNewsletter: builder.mutation({
      query: (email) => ({ url: '/admin/newsletter/subscribe', method: 'POST', body: { email } }),
    }),
    unsubscribeNewsletter: builder.mutation({
      query: (email) => ({ url: '/admin/newsletter/unsubscribe', method: 'POST', body: { email } }),
    }),
    getSubscribers: builder.query({
      query: (params) => ({ url: '/admin/newsletter/subscribers', params }),
      providesTags: ['Subscribers'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetHealthQuery, useGetSettingsQuery, useUpdateSettingMutation,
  useBulkUpdateSettingsMutation, useSubscribeNewsletterMutation,
  useUnsubscribeNewsletterMutation, useGetSubscribersQuery,
} = adminApi
