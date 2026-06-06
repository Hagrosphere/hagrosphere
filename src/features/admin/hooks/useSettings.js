import { useCallback } from 'react'
import { useGetSettingsQuery, useUpdateSettingMutation, useBulkUpdateSettingsMutation, useSubscribeNewsletterMutation } from '../adminApi'

export function useSettings(group) {
  const { data, isLoading, refetch } = useGetSettingsQuery(group)
  const [updateMutation, { isLoading: isUpdating }] = useUpdateSettingMutation()
  const [bulkUpdateMutation, { isLoading: isBulkUpdating }] = useBulkUpdateSettingsMutation()
  const [subscribeMutation] = useSubscribeNewsletterMutation()

  return {
    settings: data?.data ?? data,
    isLoading,
    isSaving: isUpdating || isBulkUpdating,
    updateSetting: useCallback((key, value) => updateMutation({ key, value }), [updateMutation]),
    bulkUpdate: useCallback((updates) => bulkUpdateMutation(updates), [bulkUpdateMutation]),
    subscribeToNewsletter: useCallback((email) => subscribeMutation(email), [subscribeMutation]),
    refetch,
  }
}
