import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "https://api.pote.dev";// Remplacer url de notre API

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

const sendGameInfo = (endpoint, body) => ({
  url: endpoint,
  method: "POST",
  body: body,
});

export const gameInfoApi = createApi({
  reducerPath: "gameInfoApi",
  baseQuery: baseQuery,
  keepUnusedDataFor: false,
  endpoints: (builder) => ({
    sendGameInfo: builder.mutation({
      query: (infoGame) => sendGameInfo("/", infoGame),//Remplacer endpoint par notre endpoints
    }),
  }),
});

export const {
  useLoginMutation,
} = gameInfoApi;
