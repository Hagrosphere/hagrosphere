import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, clearAuth } from '../features/auth/slice/authSlice'

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000/api/v1'

let isRefreshing = false

const rawBaseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await rawBaseQuery(args, api, extraOptions)

  if (result.error?.status === 401 && !isRefreshing) {
    isRefreshing = true
    try {
      const refreshResult = await rawBaseQuery(
        { url: '/auth/refresh', method: 'POST' },
        api,
        extraOptions,
      )
      if (refreshResult.data) {
        const accessToken = refreshResult.data?.accessToken
        if (accessToken) {
          api.dispatch(setCredentials({ accessToken }))
          result = await rawBaseQuery(args, api, extraOptions)
        }
      } else {
        api.dispatch(clearAuth())
      }
    } finally {
      isRefreshing = false
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: [
    'Auth', 'User', 'Users',
    'Equipment', 'EquipmentCategories',
    'Job', 'Jobs', 'JobCategories',
    'Article', 'Articles', 'ArticleTags',
    'Contact', 'Dashboard', 'Settings',
    'Subscribers', 'Activity',
  ],
  endpoints: () => ({}),
})
