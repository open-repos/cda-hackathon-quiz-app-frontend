import React ,{useEffect, useState }from "react";
import {useSelector } from "react-redux";
import { tableauQuestions } from "../models/tableauQuestions";
import { getLocalStorageItem } from "../utils/localstorage";
import ChooseCategoryQuestion from "./ChooseCategoryQuestion";
import ChooseNickname from "./ChooseNickname";

function GamesPage() {
 const [pageToDisplay, setpageToDisplay]= useState("")
  const gameStore = useSelector((state) => state.game);
  const authStore = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("authStore:",authStore)
    console.log("gameStore:",gameStore)
    console.log("getLocalStorageItem('nickname'):",getLocalStorageItem("nickname"))
    console.log("getLocalStorageItem('currentCategory'):",getLocalStorageItem("currentCategory"))
    const player = getLocalStorageItem("nickname")
    const cat = getLocalStorageItem("currentCategory")
    console.log("nickname",player)
    console.log("cat",cat)
    if (player === "" || player === null ){
      setpageToDisplay("Nickname")
    } else if ( cat !== "" || cat !== null ){
      setpageToDisplay("ChooseCatQuestions")
    } else{

    }
  }, []);

  return (
    <div style={{height:"100%"}}>
    {(pageToDisplay === "Nickname")? <ChooseNickname /> : null }
    {(pageToDisplay === "ChooseCatQuestions")? <ChooseCategoryQuestion /> : null }
    </div>
  );
}

const updateModeGame = () => {};
const questionInfo = (mode, tableQuestions) => {
  if (tableQuestions !== undefined) {
    if (mode === "Duo") {
      let tableQuest = tableQuestions;
      for (var i = 0; i < tableQuest.length; ++i) {
        // console.log(tableQuest[i])
        // console.log(tableauQuestions[i])
        tableauQuestions[i].contentQuestion = tableQuest[i].content;
        tableauQuestions[i].questionId = tableQuest[i].id;
        const res = tableQuest[i].responses.filter(
          (reponseJuste) => reponseJuste.trueOrFalse === true
        );
        tableauQuestions[i].contentGoodResponse = res[0].content;
        tableauQuestions[i].responseId = res[0].id;
        const resFalse = tableQuest[i].responses.filter(
          (reponseJuste) => reponseJuste.trueOrFalse === false
        );
        const wrongTableAnswers = randomWrongAnswers(resFalse);
        tableauQuestions[i].wrongAnswer = wrongTableAnswers;
      }
    } else if (mode === "Carre") {
      let tableQuest = tableQuestions;
      for (var i = 0; i < tableQuest.length; ++i) {
        // console.log(tableQuest[i])
        // console.log(tableauQuestions[i])
        tableauQuestions[i].contentQuestion = tableQuest[i].content;
        tableauQuestions[i].questionId = tableQuest[i].id;
        const res = tableQuest[i].responses.filter(
          (reponseJuste) => reponseJuste.trueOrFalse === true
        );
        tableauQuestions[i].contentGoodResponse = res[0].content;
        tableauQuestions[i].responseId = res[0].id;
        const resFalse = tableQuest[i].responses.filter(
          (reponseJuste) => reponseJuste.trueOrFalse === false
        );
        // const wrongTableAnswers =  randomWrongAnswers(resFalse)
        tableauQuestions[i].wrongAnswer = resFalse;
      }
    } else {
      console.log("Something went wrong inside questionInfo function");
    }
  } else {
    console.log("No data fetch");
  }
  console.log(tableauQuestions);
};

const randomWrongAnswers = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

export default GamesPage;
