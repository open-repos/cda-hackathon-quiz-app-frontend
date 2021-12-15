import { createSlice } from "@reduxjs/toolkit";
import { gameInfoApi } from "../../services/gameInfoApi";

import {
  setLocalStorageItem,
  removeLocalStorageItem,
} from "../../utils/localstorage";

const initialState = {
  nickname: null,
  isAuthenticated: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      initialState, removeLocalStorageItem("nickname");
    },
    login: (state, action) => {
      console.log("action.payload", action);
      state.nickname = action.payload;
      state.isAuthenticated = true;
      setLocalStorageItem(state.nickname, "nickname");
      console.log("state.isAuthenticated", state.isAuthenticated);
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       gameInfoApi.endpoints.sendGameInfo.matchPending,
  //       (state, action) => {
  //         console.log("pending", action);
  //         state.isLoading = true;
  //       }
  //     )
  //     .addMatcher(
  //       gameInfoApi.endpoints.sendGameInfo.matchFulfilled,
  //       (state, action) => {
  //         console.log("fulfilled", action);
  //         state.isAuthenticated = true;
  //         state.nickname = action.payload.nickname;
  //         setLocalStorageItem(action.payload.nickname, "nickname");
  //         state.isLoading = false;
  //       }
  //     )
  //     .addMatcher(
  //       gameInfoApi.endpoints.sendGameInfo.matchRejected,
  //       (state, action) => {
  //         console.log("rejected", action);
  //         state.isLoading = false;
  //         // ICI refusé si le nickname existe déjà
  //       }
  //     )
  // },
});

// Action creators are generated for each case reducer function
export const { logout, login } = authSlice.actions;

export default authSlice.reducer;
