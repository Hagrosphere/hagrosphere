import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserFilters, setUserFilters, setUserPage, resetUserFilters } from '../slice/usersSlice'
import {
  useGetUsersQuery, useGetUserStatsQuery,
  useUpdateUserRoleMutation, useUpdateUserStatusMutation, useDeleteUserMutation,
} from '../usersApi'

export function useUsers() {
  const dispatch = useDispatch()
  const filters = useSelector(selectUserFilters)

  const { data, isLoading, isFetching, refetch } = useGetUsersQuery(filters)
  const { data: statsData } = useGetUserStatsQuery()
  const [updateRoleMutation, { isLoading: isUpdatingRole }] = useUpdateUserRoleMutation()
  const [updateStatusMutation, { isLoading: isUpdatingStatus }] = useUpdateUserStatusMutation()
  const [deleteMutation, { isLoading: isDeleting }] = useDeleteUserMutation()

  return {
    users: data?.data ?? [],
    meta: data?.meta,
    stats: statsData?.data ?? statsData,
    filters, isLoading, isFetching,
    isUpdatingRole, isUpdatingStatus, isDeleting,
    setFilters: useCallback((f) => dispatch(setUserFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setUserPage(p)), [dispatch]),
    resetFilters: useCallback(() => dispatch(resetUserFilters()), [dispatch]),
    updateRole: useCallback((id, role) => updateRoleMutation({ id, role }), [updateRoleMutation]),
    updateStatus: useCallback((id, status) => updateStatusMutation({ id, status }), [updateStatusMutation]),
    deleteUser: useCallback((id) => deleteMutation(id), [deleteMutation]),
    refetch,
  }
}
