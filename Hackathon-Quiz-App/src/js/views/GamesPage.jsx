import React, { useEffect, useState } from "react";
import { useGetQuestionsQuery } from "../services/gameApi";
import { tableauQuestions } from "../models/tableauQuestions";
import { useDispatch } from "react-redux";
import { modGameChoosen } from "../features/game/gameSlice";

function GamesPage() {
  // const data = useGetQuestionsQuery('DevOps')
  // console.log(data);
  const dispatch = useDispatch();
  const [tableQuestions, setTableQuestions] = useState(undefined);
  const [category, setCategory] = useState("");
  const [categoryToSubmit, setCategoryToSubmit] = useState("");
  const data = useGetQuestionsQuery(categoryToSubmit);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = category;
    console.log("body", body);
    setCategoryToSubmit(body);
    // setTableQuestions(data);
    console.log("data",data)
    console.log("data.data?.data", data.data?.data);
    // let mode = "Carre"
    console.log(data.data?.data);
    if (tableQuestions !== null && tableQuestions !== undefined) {
      console.log('table undefined again')
      dispatch(modGameChoosen(tableQuestions[0].categoryId));
    }
    // questionInfo(mode,tableQuestions)
  };

  // useEffect(() => {
  //   const game = useSelector((state) => state.game);
  //  console.log("state de game", game)

  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Entrez la categorie"
          value={category}
          onChange={handleChange}
        />
        <button type="submit">Envoyer la requête</button>
      </form>
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
