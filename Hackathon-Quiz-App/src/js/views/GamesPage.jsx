import React, { useEffect, useState } from "react";
import { tableauQuestions } from "../models/tableauQuestions";
import { useDispatch, useSelector } from "react-redux";
import { categoryChosen } from "../features/game/gameSlice";
import api from "../utils/api";
import { getLocalStorageItem } from "../utils/localstorage";

function GamesPage() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const gameStore = useSelector((state) => state.game);

  async function fetchQuestions() {
    let body = "";
    console.log(
      "getLocalStorageItem(currentCategory)",
      getLocalStorageItem("currentCategory")
    );
    console.log("category:", category);
    if (category !== "" && getLocalStorageItem("currentCategory") !== category) {
      body = category;
    } else if (
      category === "" &&
      (getLocalStorageItem("currentCategory") !== null ||
        getLocalStorageItem("currentCategory") !== undefined)
    ) {
      body = getLocalStorageItem("currentCategory");
    } else {
      return;
    }

    console.log("body:", body);
    try {
      const result = await api.get(`/questions/${body}`);
      if (result.status === 200) {
        console.log(result);
        if (result.data.data !== false) {
          console.log(
            "result.data.data[0].categoryId:",
            result.data.data[0].categoryId
          );
          dispatch(categoryChosen(result.data.data[0].categoryId));
        }
      }
    } catch (err) {
      console.log(`Erreur lors de la requête : /questions/${body}`);
    }
  }

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchQuestions();
  };

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
// import React from "react";
// import { useGetQuestionsQuery } from "../services/gameApi";

// import "../../css/GamesPage.css";

// import Title from "../components/Title";
// import BackgroundThree from "../components/BackgroundThree";
// import CategoryQuestion from "../components/CategoryQuestion";

// function GamesPage() {
//   // const data = useGetQuestionsQuery("DevOps");
//   // console.log(data);

//   return (
//     <BackgroundThree>
//       <div className="grid-container">
//         <div className="grid-child-left">
//           <Title />
//           <CategoryQuestion />
//           <div className="lines-left">
//             <div className="line-1"></div>
//             <div className="line-2"></div>
//           </div>
//         </div>

//         <div className="grid-child-right">
//           <div className="lines-right">
//             <div className="line-1"></div>
//             <div className="line-2"></div>
//           </div>
//         </div>
//       </div>
//     </BackgroundThree>
//   );
// }

// export default GamesPage;
