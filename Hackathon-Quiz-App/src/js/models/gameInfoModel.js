
var history = new Array(10);

for (var i = 0; i < history.length; i++) {
  history[i] = { questionId: null, gameModeId: null, responseId: null, responseTime: null,rightAnswer:null};
}

// console.log("questions model",history)
export const gameInfoModel = {
  player: "",
  game: {
    categoryId: null,
    history: history,
  }
};
