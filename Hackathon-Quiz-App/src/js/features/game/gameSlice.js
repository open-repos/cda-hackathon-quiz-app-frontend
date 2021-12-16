import { createSlice } from "@reduxjs/toolkit";
// import { gameApi } from "../../services/gameApi";
import { gameInfoModel } from "../../models/gameInfoModel";
import {
    removeLocalStorageItem,
  setLocalStorageItem,
} from "../../utils/localstorage";

const initialState = {
  gameInfo: gameInfoModel,
  currentCategory:null,
  currentMode:null,
  currentQuestion:null,
  currentCounterTime:null,
  isLoading: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    leaveGame: () => {initialState,removeLocalStorageItem("gameInfo")},
    categoryChosen: (state,action) => {
      state.gameInfo.game.categoryId = action.payload;
      setLocalStorageItem(state.gameInfo, "gameInfo");
      let categoryChoosen = '';
      console.log(typeof(action.payload));
      switch(action.payload){
        case 1:
          categoryChoosen="Front-end";
          break
        case 2:
          categoryChoosen="Back-end";
          break
        case 3:
          categoryChoosen="DevOps";
          break
        default:
          categoryChoosen =null;
      }
      state.currentCategory = categoryChoosen;
      setLocalStorageItem(categoryChoosen, "currentCategory");
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(
  //       gameApi.endpoints.getQuestions.matchPending,
  //       (state, action) => {
  //         console.log("pending", action);
  //         state.isLoading = true;
  //       }
  //     )
  //     .addMatcher(
  //       gameApi.endpoints.getQuestions.matchFulfilled,
  //       (state, action) => {
  //         console.log("fulfilled", action);
  //         state.isLoading = false;
  //         setLocalStorageItem(action.payload.gameInfo, "gameInfo");
  //       }
  //     )
  //     .addMatcher(gameApi.endpoints.getQuestions.matchRejected, (state, action) => {
  //       console.log("rejected", action);
  //       state.isLoading = false;
  //       state = initialState;
  //     })
  //     .addMatcher(
  //       gameApi.endpoints.getHistory.matchPending,
  //       (state, action) => {
  //         console.log("pending fetching current user", action);
  //         state.isLoading = true;
  //       }
  //     )
  //     .addMatcher(
  //       gameApi.endpoints.getHistory.matchFulfilled,
  //       (state, action) => {
  //         console.log("fullfilled fetching current user", action);
  //         state.isLoading = false;
  //         setLocalStorageItem(action.payload.historyInfo, "historyInfo");
  //       }
  //     )
  //     .addMatcher(
  //       gameApi.endpoints.getHistory.matchRejected,
  //       (state, action) => {
  //         console.log("rejected fetching current user", action);
  //         state = initialState;
  //       }
  //     )
  // },
});

// Action creators are generated for each case reducer function
export const { leaveGame, categoryChosen } =
  gameSlice.actions;

export default gameSlice.reducer;
