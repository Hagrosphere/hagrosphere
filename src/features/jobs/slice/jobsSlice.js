import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: { page: 1, limit: 10, sortBy: 'publishedAt', sortOrder: 'desc' },
  adminFilters: { page: 1, limit: 10, sortBy: 'createdAt', sortOrder: 'desc' },
  applicationFilters: { page: 1, limit: 20 },
  selectedIds: [],
}

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setFilters: (state, action) => { 
      const newFilters = { ...state.filters, ...action.payload, page: 1 };
      // Remove status if explicitly set to null
      if (action.payload.status === null) {
        delete newFilters.status;
      }
      state.filters = newFilters;
    },
    setPage: (state, action) => { state.filters.page = action.payload },
    resetFilters: (state) => { state.filters = initialState.filters },
    toggleSelectId: (state, action) => {
      const idx = state.selectedIds.indexOf(action.payload)
      if (idx === -1) state.selectedIds.push(action.payload)
      else state.selectedIds.splice(idx, 1)
    },
    clearSelectedIds: (state) => { state.selectedIds = [] },
    setApplicationFilters: (state, action) => {
      state.applicationFilters = { ...state.applicationFilters, ...action.payload }
    },
    setApplicationPage: (state, action) => {
      state.applicationFilters.page = action.payload
    },
  },
})

export const {
  setFilters: setJobFilters, setPage: setJobPage,
  resetFilters: resetJobFilters, toggleSelectId: toggleSelectJobId,
  clearSelectedIds: clearSelectedJobIds,
  setApplicationFilters, setApplicationPage,
} = jobsSlice.actions

export const selectJobFilters = (s) => {
  // Add status: 'OPEN' for public queries only
  return s.jobs.filters.status === undefined 
    ? { ...s.jobs.filters, status: 'OPEN' }
    : s.jobs.filters;
};
export const selectAdminJobFilters = (s) => s.jobs.filters;
export const selectApplicationFilters = (s) => s.jobs.applicationFilters;
export default jobsSlice.reducer
