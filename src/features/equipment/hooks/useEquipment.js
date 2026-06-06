import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectEquipmentFilters, setEquipmentFilters, setEquipmentPage, resetEquipmentFilters } from '../slice/equipmentSlice'
import {
  useGetEquipmentQuery, useGetEquipmentCategoriesQuery, useGetEquipmentBySlugQuery,
  useCreateEquipmentMutation, useUpdateEquipmentMutation, useDeleteEquipmentMutation,
} from '../equipmentApi'

export function useEquipment() {
  const dispatch = useDispatch()
  const filters = useSelector(selectEquipmentFilters)

  const { data, isLoading, isFetching, isError, refetch } = useGetEquipmentQuery(filters)
  const { data: categoriesData } = useGetEquipmentCategoriesQuery()
  const [createMutation, { isLoading: isCreating }] = useCreateEquipmentMutation()
  const [updateMutation, { isLoading: isUpdating }] = useUpdateEquipmentMutation()
  const [deleteMutation, { isLoading: isDeleting }] = useDeleteEquipmentMutation()

  return {
    equipment: data?.data ?? [],
    meta: data?.meta,
    categories: Array.isArray(categoriesData) ? categoriesData : (categoriesData?.data ?? []),
    filters,
    isLoading, isFetching, isError, isCreating, isUpdating, isDeleting,
    setFilters: useCallback((f) => dispatch(setEquipmentFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setEquipmentPage(p)), [dispatch]),
    resetFilters: useCallback(() => dispatch(resetEquipmentFilters()), [dispatch]),
    create: createMutation,
    update: updateMutation,
    remove: deleteMutation,
    refetch,
  }
}

export function useEquipmentDetail(slug) {
  const result = useGetEquipmentBySlugQuery(slug, { skip: !slug })
  return {
    ...result,
    data: result.data,
  }
}
