import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL = "http://localhost:4200/api"; // Remplacer url de notre API

const baseQuery = fetchBaseQuery({
  baseUrl: API_BASE_URL,
});

const sendGameInfo = (endpoint, body) => ({
  url: endpoint,
  method: "POST",
  body: body,
});

export const gameApi = createApi({
  reducerPath: "gameApi",
  baseQuery: baseQuery,
  keepUnusedDataFor: false,
  endpoints(builder) {
    return {
      getQuestions: builder.query({
        query: (category) => {
          return `/questions/${category}`
        }
      }),
      getHistory: builder.query({
        query: (name) => {
          return `/history/${name}`
        }
      })
    }
    // sendGameInfo: builder.mutation({
    //   query: (infoGame) => sendGameInfo("/", infoGame),//Remplacer endpoint par notre endpoints
    // }),
  },
});

export const {
  useGetQuestionsQuery,
  useGetHistoryQuery,
} = gameApi;
