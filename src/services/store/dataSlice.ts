import { createSlice } from "@reduxjs/toolkit"

export const dataSlice = createSlice({
  name: "dataFetch",
  initialState: {
    value: null,
  },
  reducers: {
    fetch: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { fetch } = dataSlice.actions

export default dataSlice.reducer