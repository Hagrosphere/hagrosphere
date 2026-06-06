import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: { page: 1, limit: 12, sortBy: 'createdAt', sortOrder: 'desc' },
  selectedIds: [],
}

const equipmentSlice = createSlice({
  name: 'equipment',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload, page: 1 }
    },
    setPage: (state, action) => { state.filters.page = action.payload },
    resetFilters: (state) => { state.filters = initialState.filters },
    toggleSelectId: (state, action) => {
      const idx = state.selectedIds.indexOf(action.payload)
      if (idx === -1) state.selectedIds.push(action.payload)
      else state.selectedIds.splice(idx, 1)
    },
    clearSelectedIds: (state) => { state.selectedIds = [] },
  },
})

export const {
  setFilters: setEquipmentFilters,
  setPage: setEquipmentPage,
  resetFilters: resetEquipmentFilters,
  toggleSelectId: toggleSelectEquipmentId,
  clearSelectedIds: clearSelectedEquipmentIds,
} = equipmentSlice.actions

export const selectEquipmentFilters = (s) => s.equipment.filters
export const selectSelectedEquipmentIds = (s) => s.equipment.selectedIds
export default equipmentSlice.reducer
