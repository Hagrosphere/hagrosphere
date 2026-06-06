import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser, setInitialized, clearAuth, selectIsInitialized } from '../slice/authSlice'
import { useGetMeQuery } from '../authApi'

export function useAppInit() {
  const dispatch = useDispatch()
  const isInitialized = useSelector(selectIsInitialized)
  const hasToken = !!sessionStorage.getItem('access_token')

  const { data, isError, isSuccess, isLoading } = useGetMeQuery(undefined, {
    skip: !hasToken,
  })

  useEffect(() => {
    if (!hasToken) {
      dispatch(setInitialized())
      return
    }
    if (isSuccess && data) {
      const user = data?.data ?? data
      dispatch(setCurrentUser(user))
    }
    if (isError) {
      // Clear stale token and mark as initialized
      sessionStorage.removeItem('access_token')
      dispatch(clearAuth())
    }
  }, [isSuccess, isError, data, hasToken, dispatch])

  return {
    isInitialized: !hasToken ? true : isInitialized,
    isLoading: hasToken && isLoading,
  }
}
