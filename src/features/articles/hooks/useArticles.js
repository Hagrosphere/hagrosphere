import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticleFilters, setArticleFilters, setArticlePage, resetArticleFilters } from '../slice/articlesSlice'
import {
  useGetArticlesQuery, useGetAdminArticlesQuery, useGetArticleTagsQuery,
  useGetArticleBySlugQuery, useGetArticleByIdQuery, useCreateArticleMutation, useUpdateArticleMutation, useDeleteArticleMutation,
} from '../articlesApi'

export function useArticles(adminMode = false) {
  const dispatch = useDispatch()
  const filters = useSelector(selectArticleFilters)

  const publicResult = useGetArticlesQuery(filters, { skip: adminMode })
  const adminResult = useGetAdminArticlesQuery(filters, { skip: !adminMode })
  const result = adminMode ? adminResult : publicResult
  const { data: tagsData } = useGetArticleTagsQuery()
  const [createMutation, { isLoading: isCreating }] = useCreateArticleMutation()
  const [updateMutation, { isLoading: isUpdating }] = useUpdateArticleMutation()
  const [deleteMutation, { isLoading: isDeleting }] = useDeleteArticleMutation()

  return {
    articles: result.data?.data ?? [],
    meta: result.data?.meta,
    tags: Array.isArray(tagsData) ? tagsData : (tagsData?.data ?? []),
    filters,
    isLoading: result.isLoading, isFetching: result.isFetching, isError: result.isError,
    isCreating, isUpdating, isDeleting,
    setFilters: useCallback((f) => dispatch(setArticleFilters(f)), [dispatch]),
    setPage: useCallback((p) => dispatch(setArticlePage(p)), [dispatch]),
    resetFilters: useCallback(() => dispatch(resetArticleFilters()), [dispatch]),
    create: createMutation, update: updateMutation, remove: deleteMutation,
    refetch: result.refetch,
  }
}

export function useArticleDetail(slug) {
  const result = useGetArticleBySlugQuery(slug, { skip: !slug })
  return {
    ...result,
    data: result.data,
  }
}

export function useArticleById(id) {
  const result = useGetArticleByIdQuery(id, { skip: !id })
  return {
    ...result,
    data: result.data,
  }
}
