import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
  selectApplicationFilters, 
  setApplicationFilters, 
  setApplicationPage 
} from '../slice/jobsSlice'
import { 
  useGetJobApplicationsQuery, 
  useUpdateApplicationStatusMutation 
} from '../jobsApi'

export function useJobApplications() {
  const dispatch = useDispatch()
  const filters = useSelector(selectApplicationFilters)

  const { data, isLoading, isFetching, refetch } = useGetJobApplicationsQuery(filters)
  const [updateStatusMutation] = useUpdateApplicationStatusMutation()

  return {
    applications: data?.data ?? [],
    meta: data?.meta,
    filters,
    isLoading,
    isFetching,
    refetch,
    setFilters: useCallback((f) => dispatch(setApplicationFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setApplicationPage(p)), [dispatch]),
    updateStatus: useCallback((id, status) => updateStatusMutation({ id, status }), [updateStatusMutation]),
  }
}
