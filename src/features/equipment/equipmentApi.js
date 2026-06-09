import { baseApi } from '../../store/baseApi'

export const equipmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEquipment: builder.query({
      query: (params) => ({ url: '/equipment', params }),
      transformResponse: (response) => response.data ? response : { data: response, meta: {} },
      providesTags: (result) =>
        result?.data
          ? [...result.data.map(({ id }) => ({ type: 'Equipment', id })), { type: 'Equipment', id: 'LIST' }]
          : [{ type: 'Equipment', id: 'LIST' }],
    }),
    getEquipmentCategories: builder.query({
      query: () => '/equipment/categories',
      transformResponse: (response) => response.data ?? response,
      providesTags: ['EquipmentCategories'],
    }),
    getEquipmentBySlug: builder.query({
      query: (slug) => `/equipment/${slug}`,
      transformResponse: (response) => response.data ?? response,
      providesTags: (_r, _e, slug) => [{ type: 'Equipment', id: slug }],
    }),
    createEquipment: builder.mutation({
      query: (body) => ({ url: '/equipment', method: 'POST', body }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: [{ type: 'Equipment', id: 'LIST' }, 'Dashboard'],
    }),
    updateEquipment: builder.mutation({
      query: ({ id, data }) => ({ url: `/equipment/${id}`, method: 'PATCH', body: data }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: (_r, _e, { id }) => [
        { type: 'Equipment', id },
        { type: 'Equipment', id: 'LIST' },
      ],
    }),
    deleteEquipment: builder.mutation({
      query: (id) => ({ url: `/equipment/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Equipment', id: 'LIST' }, 'Dashboard'],
    }),
    submitEquipmentInquiry: builder.mutation({
      query: ({ equipmentId, data }) => ({ url: `/equipment/${equipmentId}/inquire`, method: 'POST', body: data }),
      transformResponse: (response) => response.data ?? response,
    }),
    getEquipmentInquiries: builder.query({
      query: (params) => ({ url: '/equipment/admin/inquiries/all', params }),
      transformResponse: (response) => {
        // Backend returns { data: [...], meta: {...} }
        return response.data ? response : { data: response, meta: {} };
      },
      providesTags: ['EquipmentInquiries'],
    }),
    updateEquipmentInquiryStatus: builder.mutation({
      query: ({ id, status }) => ({ url: `/equipment/admin/inquiries/${id}/status`, method: 'PATCH', body: { status } }),
      transformResponse: (response) => response.data ?? response,
      invalidatesTags: ['EquipmentInquiries'],
    }),
  }),
  overrideExisting: false,
})

export const {
  useGetEquipmentQuery,
  useGetEquipmentCategoriesQuery,
  useGetEquipmentBySlugQuery,
  useCreateEquipmentMutation,
  useUpdateEquipmentMutation,
  useDeleteEquipmentMutation,
  useSubmitEquipmentInquiryMutation,
  useGetEquipmentInquiriesQuery,
  useUpdateEquipmentInquiryStatusMutation,
} = equipmentApi
