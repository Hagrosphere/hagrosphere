import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: { page: 1, limit: 9, sortBy: 'publishedAt', sortOrder: 'desc' },
  selectedIds: [],
  editorContent: '',
  isDirty: false,
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setFilters: (state, action) => { state.filters = { ...state.filters, ...action.payload, page: 1 } },
    setPage: (state, action) => { state.filters.page = action.payload },
    resetFilters: (state) => { state.filters = initialState.filters },
    setEditorContent: (state, action) => { state.editorContent = action.payload; state.isDirty = true },
    clearEditor: (state) => { state.editorContent = ''; state.isDirty = false },
    markClean: (state) => { state.isDirty = false },
    toggleSelectId: (state, action) => {
      const idx = state.selectedIds.indexOf(action.payload)
      if (idx === -1) state.selectedIds.push(action.payload)
      else state.selectedIds.splice(idx, 1)
    },
    clearSelectedIds: (state) => { state.selectedIds = [] },
  },
})

export const {
  setFilters: setArticleFilters, setPage: setArticlePage,
  resetFilters: resetArticleFilters, setEditorContent, clearEditor, markClean,
  toggleSelectId: toggleSelectArticleId, clearSelectedIds: clearSelectedArticleIds,
} = articlesSlice.actions

export const selectArticleFilters = (s) => s.articles.filters
export const selectEditorContent = (s) => s.articles.editorContent
export const selectIsEditorDirty = (s) => s.articles.isDirty
export default articlesSlice.reducer
