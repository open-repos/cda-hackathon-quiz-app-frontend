import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Services
import { gameApi } from "../services/gameApi";
//Features
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    auth,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     gameInfoApi.middleware,
  //     logger
  //   ), // A ajouter peopleApi.middleware
});
