import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectJobFilters, selectAdminJobFilters, setJobFilters, setJobPage, resetJobFilters } from '../slice/jobsSlice'
import {
  useGetJobsQuery, useGetAdminJobsQuery, useGetJobCategoriesQuery,
  useGetJobBySlugQuery, useGetJobByIdQuery, useCreateJobMutation, useUpdateJobMutation, useDeleteJobMutation,
} from '../jobsApi'

export function useJobs(adminMode = false) {
  const dispatch = useDispatch()
  const publicFilters = useSelector(selectJobFilters)
  const adminFilters = useSelector(selectAdminJobFilters)
  const filters = adminMode ? adminFilters : publicFilters

  const publicResult = useGetJobsQuery(publicFilters, { skip: adminMode })
  const adminResult = useGetAdminJobsQuery(adminFilters, { skip: !adminMode })
  const result = adminMode ? adminResult : publicResult
  const { data: categoriesData } = useGetJobCategoriesQuery()
  const [createMutation, { isLoading: isCreating }] = useCreateJobMutation()
  const [updateMutation, { isLoading: isUpdating }] = useUpdateJobMutation()
  const [deleteMutation, { isLoading: isDeleting }] = useDeleteJobMutation()

  return {
    jobs: result.data?.data ?? [],
    meta: result.data?.meta,
    categories: Array.isArray(categoriesData) ? categoriesData : (categoriesData?.data ?? []),
    filters,
    isLoading: result.isLoading, isFetching: result.isFetching, isError: result.isError,
    isCreating, isUpdating, isDeleting,
    setFilters: useCallback((f) => dispatch(setJobFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setJobPage(p)), [dispatch]),
    resetFilters: useCallback(() => dispatch(resetJobFilters()), [dispatch]),
    create: createMutation, update: updateMutation, remove: deleteMutation,
    refetch: result.refetch,
  }
}

export function useJobDetail(slug) {
  const result = useGetJobBySlugQuery(slug, { skip: !slug })
  return {
    ...result,
    data: result.data,
  }
}

export function useJobById(id) {
  const result = useGetJobByIdQuery(id, { skip: !id })
  return {
    ...result,
    data: result.data,
  }
}
