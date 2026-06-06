import { useDispatch, useSelector } from 'react-redux'
import { setActivityPage, selectActivityPage } from '../slice/dashboardSlice'
import { useGetDashboardOverviewQuery, useGetActivityFeedQuery } from '../dashboardApi'

export function useDashboard() {
  const dispatch = useDispatch()
  const activityPage = useSelector(selectActivityPage)

  const { data: overviewData, isLoading: isOverviewLoading, isFetching: isOverviewFetching, refetch: refetchOverview } = useGetDashboardOverviewQuery()
  const { data: activityData, isLoading: isActivityLoading, isFetching: isActivityFetching } = useGetActivityFeedQuery({ page: activityPage, limit: 20 })

  const overview = overviewData?.data ?? overviewData

  return {
    overview,
    stats: overview?.stats,
    charts: overview?.charts,
    recent: overview?.recent,
    isOverviewLoading, isOverviewFetching, refetchOverview,
    activity: activityData?.data ?? [],
    activityMeta: activityData?.meta,
    activityPage,
    setActivityPage: (page) => dispatch(setActivityPage(page)),
    isActivityLoading, isActivityFetching,
  }
}
