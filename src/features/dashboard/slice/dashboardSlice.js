import { createSlice } from '@reduxjs/toolkit'

const initialState = { activityPage: 1 }

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setActivityPage: (state, action) => { state.activityPage = action.payload },
  },
})

export const { setActivityPage } = dashboardSlice.actions
export const selectActivityPage = (s) => s.dashboard.activityPage
export default dashboardSlice.reducer
