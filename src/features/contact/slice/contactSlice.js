import { createSlice } from '@reduxjs/toolkit'

const initialState = { filters: { page: 1, limit: 20 } }

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setFilters: (state, action) => { state.filters = { ...state.filters, ...action.payload, page: 1 } },
    setPage: (state, action) => { state.filters.page = action.payload },
  },
})

export const { setFilters: setContactFilters, setPage: setContactPage } = contactSlice.actions
export const selectContactFilters = (s) => s.contact.filters
export default contactSlice.reducer
