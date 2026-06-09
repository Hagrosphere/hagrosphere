import { baseApi } from '../../store/baseApi'

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardOverview: builder.query({
      query: () => '/dashboard/overview',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['Dashboard'],
      keepUnusedDataFor: 60, // Reduced from 300 to 60 seconds
    }),
    getActivityFeed: builder.query({
      query: (params) => ({ url: '/dashboard/activity', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: ['Activity'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetDashboardOverviewQuery, useGetActivityFeedQuery } = dashboardApi
