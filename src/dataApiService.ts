import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { SceneProps } from "./App.interface"

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://gist.githubusercontent.com/" }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => ({ url: "robwatkiss/09f2461e02d372747dad5fe56ff2251f/raw/b942d9ba21e10889a6cfce639c1a12f6bb2bfa0e/Senior%2520Frontend%2520Developer%2520Task%2520-%2520Sample%2520Lens%2520Guide%2520Data.json" }),
      transformResponse: (response: SceneProps[]) => response,
    }),
  }),
})

export const { useGetDataQuery } = dataApi