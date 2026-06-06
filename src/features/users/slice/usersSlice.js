import { createSlice } from '@reduxjs/toolkit'

const initialState = { filters: { page: 1, limit: 20 } }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setFilters: (state, action) => { state.filters = { ...state.filters, ...action.payload, page: 1 } },
    setPage: (state, action) => { state.filters.page = action.payload },
    resetFilters: (state) => { state.filters = initialState.filters },
  },
})

export const { setFilters: setUserFilters, setPage: setUserPage, resetFilters: resetUserFilters } = usersSlice.actions
export const selectUserFilters = (s) => s.users.filters
export default usersSlice.reducer
