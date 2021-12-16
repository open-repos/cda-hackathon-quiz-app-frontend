import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

// //Services
// import { gameApi } from "../services/gameApi";
//Features
import auth from "../features/auth/authSlice";
import game from "../features/game/gameSlice"

const reducer = {
  // [gameApi.reducerPath]: gameApi.reducer,
  auth:auth,
  game:game,
}

export const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(
  //     gameApi.middleware,
  //     logger
  //   ), // A ajouter peopleApi.middleware
});
