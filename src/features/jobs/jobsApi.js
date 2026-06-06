import { baseApi } from '../../store/baseApi'

export const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (params) => ({ url: '/jobs', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Job', id })), { type: 'Jobs', id: 'LIST' }]
          : [{ type: 'Jobs', id: 'LIST' }],
    }),
    getAdminJobs: builder.query({
      query: (params) => {
        // Filter out undefined values from params
        const cleanParams = Object.fromEntries(
          Object.entries(params).filter(([_, v]) => v !== undefined)
        );
        return { url: '/jobs/admin/all', params: cleanParams };
      },
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: [{ type: 'Jobs', id: 'ADMIN_LIST' }],
    }),
    getJobCategories: builder.query({
      query: () => '/jobs/categories',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['JobCategories'],
    }),
    getJobBySlug: builder.query({
      query: (slug) => `/jobs/${slug}`,
      transformResponse: (response) => response.data ?? response,
      providesTags: (_r, _e, slug) => [{ type: 'Job', id: slug }],
    }),
    getJobById: builder.query({
      query: (id) => `/jobs/admin/${id}`,
      transformResponse: (response) => response.data ?? response,
      providesTags: (_r, _e, id) => [{ type: 'Job', id }],
    }),
    createJob: builder.mutation({
      query: (body) => ({ url: '/jobs', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }, { type: 'Jobs', id: 'ADMIN_LIST' }, 'Dashboard'],
    }),
    updateJob: builder.mutation({
      query: ({ id, data }) => ({ url: `/jobs/${id}`, method: 'PATCH', body: data }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [
        { type: 'Job', id },
        { type: 'Jobs', id: 'LIST' },
        { type: 'Jobs', id: 'ADMIN_LIST' },
      ],
    }),
    deleteJob: builder.mutation({
      query: (id) => ({ url: `/jobs/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Jobs', id: 'LIST' }, { type: 'Jobs', id: 'ADMIN_LIST' }, 'Dashboard'],
    }),
    submitJobApplication: builder.mutation({
      query: ({ jobId, data }) => ({ url: `/jobs/${jobId}/apply`, method: 'POST', body: data }),
      transformResponse: (response) => response,
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetJobsQuery, useGetAdminJobsQuery, useGetJobCategoriesQuery, useGetJobBySlugQuery, useGetJobByIdQuery,
  useCreateJobMutation, useUpdateJobMutation, useDeleteJobMutation, useSubmitJobApplicationMutation,
} = jobsApi
