import { baseApi } from '../../store/baseApi'

export const uploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadImage: builder.mutation({
      query: ({ file, folder = 'general' }) => {
        const formData = new FormData()
        formData.append('file', file)
        return { url: `/upload/image?folder=${folder}`, method: 'POST', body: formData, formData: true }
      },
      transformResponse: (response) => response.data ?? response,
    }),
    uploadImages: builder.mutation({
      query: ({ files, folder = 'equipment' }) => {
        const formData = new FormData()
        files.forEach((file) => formData.append('files', file))
        return { url: `/upload/images?folder=${folder}`, method: 'POST', body: formData, formData: true }
      },
      transformResponse: (response) => response.data ?? response,
    }),
    deleteFile: builder.mutation({
      query: (publicId) => ({ url: `/upload/${encodeURIComponent(publicId)}`, method: 'DELETE' }),
      transformResponse: (response) => response.data ?? response,
    }),
  }),
  overrideExisting: false,
})

export const { useUploadImageMutation, useUploadImagesMutation, useDeleteFileMutation } = uploadApi
