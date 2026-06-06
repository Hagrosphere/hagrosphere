import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarCollapsed: localStorage.getItem('sidebar_collapsed') === 'true',
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed
      localStorage.setItem('sidebar_collapsed', String(state.sidebarCollapsed))
    },
    setSidebarCollapsed: (state, action) => {
      state.sidebarCollapsed = action.payload
      localStorage.setItem('sidebar_collapsed', String(action.payload))
    },
  },
})

export const { toggleSidebar, setSidebarCollapsed } = uiSlice.actions
export const selectSidebarCollapsed = (s) => s.ui.sidebarCollapsed
export default uiSlice.reducer
