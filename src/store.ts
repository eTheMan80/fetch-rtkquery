import { configureStore } from "@reduxjs/toolkit"
import dataFetch from './dataSlice'
import { dataApi } from "./dataApiService"

const store = configureStore({
  reducer: {
    dataFetch,
    [dataApi.reducerPath]: dataApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store