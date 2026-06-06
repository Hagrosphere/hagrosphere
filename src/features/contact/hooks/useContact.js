import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectContactFilters, setContactFilters, setContactPage } from '../slice/contactSlice'
import {
  useSubmitContactMutation, useGetContactMessagesQuery,
  useMarkMessageReadMutation, useMarkMessageRepliedMutation,
} from '../contactApi'

export function useContact(options = {}) {
  const dispatch = useDispatch()
  const filters = useSelector(selectContactFilters)

  const [submitMutation, { isLoading: isSubmitting, isSuccess: isSubmitted }] = useSubmitContactMutation()
  const { data, isLoading, isFetching, refetch } = useGetContactMessagesQuery(filters, { skip: !options.admin })
  const [markReadMutation] = useMarkMessageReadMutation()
  const [markRepliedMutation] = useMarkMessageRepliedMutation()

  return {
    submit: useCallback((formData) => submitMutation(formData), [submitMutation]),
    isSubmitting, isSubmitted,
    messages: data?.data ?? [],
    meta: data?.meta,
    filters, isLoading, isFetching, refetch,
    setFilters: useCallback((f) => dispatch(setContactFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setContactPage(p)), [dispatch]),
    markRead: useCallback((id) => markReadMutation(id), [markReadMutation]),
    markReplied: useCallback((id, note) => markRepliedMutation({ id, replyNote: note }), [markRepliedMutation]),
  }
}
