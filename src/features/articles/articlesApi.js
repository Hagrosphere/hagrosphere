import { baseApi } from '../../store/baseApi'

export const articlesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (params) => ({ url: '/articles', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Article', id })), { type: 'Articles', id: 'LIST' }]
          : [{ type: 'Articles', id: 'LIST' }],
    }),
    getAdminArticles: builder.query({
      query: (params) => ({ url: '/articles/admin/all', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: [{ type: 'Articles', id: 'ADMIN_LIST' }],
    }),
    getArticleTags: builder.query({
      query: () => '/articles/tags',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['ArticleTags'],
    }),
    getArticleBySlug: builder.query({
      query: (slug) => `/articles/${slug}`,
      transformResponse: (response) => response.data ?? response,
      providesTags: (_r, _e, slug) => [{ type: 'Article', id: slug }],
    }),
    getArticleById: builder.query({
      query: (id) => `/articles/admin/${id}`,
      transformResponse: (response) => response.data ?? response,
      providesTags: (_r, _e, id) => [{ type: 'Article', id }],
    }),
    createArticle: builder.mutation({
      query: (body) => ({ url: '/articles', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, { type: 'Articles', id: 'ADMIN_LIST' }, 'Dashboard'],
    }),
    updateArticle: builder.mutation({
      query: ({ id, data }) => ({ url: `/articles/${id}`, method: 'PATCH', body: data }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [
        { type: 'Article', id },
        { type: 'Articles', id: 'LIST' },
        { type: 'Articles', id: 'ADMIN_LIST' },
      ],
    }),
    deleteArticle: builder.mutation({
      query: (id) => ({ url: `/articles/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Articles', id: 'LIST' }, { type: 'Articles', id: 'ADMIN_LIST' }, 'Dashboard'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetArticlesQuery, useGetAdminArticlesQuery, useGetArticleTagsQuery,
  useGetArticleBySlugQuery, useGetArticleByIdQuery, useCreateArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation,
} = articlesApi
