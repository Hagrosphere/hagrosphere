import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './baseApi'
import { authMiddleware } from './middleware/authMiddleware'
import { errorMiddleware } from './middleware/errorMiddleware'

import authReducer from '../features/auth/slice/authSlice'
import uiReducer from '../features/ui/slice/uiSlice'
import equipmentReducer from '../features/equipment/slice/equipmentSlice'
import jobsReducer from '../features/jobs/slice/jobsSlice'
import articlesReducer from '../features/articles/slice/articlesSlice'
import dashboardReducer from '../features/dashboard/slice/dashboardSlice'
import usersReducer from '../features/users/slice/usersSlice'
import contactReducer from '../features/contact/slice/contactSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    equipment: equipmentReducer,
    jobs: jobsReducer,
    articles: articlesReducer,
    dashboard: dashboardReducer,
    users: usersReducer,
    contact: contactReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(baseApi.middleware)
      .concat(authMiddleware)
      .concat(errorMiddleware),
  devTools: import.meta.env.DEV,
})
