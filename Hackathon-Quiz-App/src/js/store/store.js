import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Services
import { gameInfoApi } from "../services/gameInfoApi";
//Features
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [gameInfoApi.reducerPath]: gameInfoApi.reducer,
    auth,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     gameInfoApi.middleware,
  //     logger
  //   ), // A ajouter peopleApi.middleware
});
