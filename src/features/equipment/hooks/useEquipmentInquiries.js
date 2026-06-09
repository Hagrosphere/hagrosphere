import { useCallback } from 'react'
import { useGetEquipmentInquiriesQuery, useUpdateEquipmentInquiryStatusMutation } from '../equipmentApi'

export function useEquipmentInquiries(filters = {}) {
  const cleanFilters = {};
  if (filters.status) cleanFilters.status = filters.status;
  if (filters.equipmentId) cleanFilters.equipmentId = filters.equipmentId;
  if (filters.page) cleanFilters.page = filters.page;
  if (filters.limit) cleanFilters.limit = filters.limit;

  const { data, isLoading, isFetching, refetch } = useGetEquipmentInquiriesQuery(cleanFilters)
  const [updateStatusMutation] = useUpdateEquipmentInquiryStatusMutation()

  return {
    inquiries: data?.data ?? [],
    meta: data?.meta,
    isLoading,
    isFetching,
    refetch,
    updateStatus: useCallback((id, status) => updateStatusMutation({ id, status }), [updateStatusMutation]),
  }
}
