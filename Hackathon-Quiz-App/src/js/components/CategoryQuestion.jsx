import React, { useEffect,useState } from "react";
import "../../css/CategoryQuestion.css";

import { useNavigate,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryChosen } from "../features/game/gameSlice";
import api from "../utils/api";
import { getLocalStorageItem } from "../utils/localstorage";

function CategoryQuestion() {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const gameStore = useSelector((state) => state.game);

  const navigate = useNavigate();
  let location = useLocation();
  let from = (location.state?.from?.pathname || location.pathname) ||"/";


  const [changeImageBack, setChangeImageBack] = useState(false);
  const [changeImageFront, setChangeImageFront] = useState(false);
  const [changeImageDevops, setChangeImageDevops] = useState(false);
  const [imageUnselectedBack, setImageUnselectedBack] = useState(
    "/src/assets/quizzGame-back.png"
  );
  const [imageUnselectedFront, setImageUnselectedFront] = useState(
    "/src/assets/quizzGame-front.png"
  );
  const [imageUnselectedDevops, setImageUnselectedDevops] = useState(
    "/src/assets/quizzGame_devops.png"
  );
  const [borderStyleDevops, setBorderStyleDevops] =
    useState("2px solid #c4c4c4");
  const [borderStyleFront, setBorderStyleFront] = useState("2px solid #c4c4c4");
  const [borderStyleBack, setBorderStyleBack] = useState("2px solid #c4c4c4");

  const imageSelected = (category) => {
    console.log(category);
    setCategory(category)
    if (category === "DevOps") {
      setChangeImageDevops(true);
      setChangeImageBack(false);
      setChangeImageFront(false);
      setImageUnselectedDevops("/src/assets/quizzGame-select_devops.png");
      setBorderStyleDevops("2px solid #F52D7E");
      setBorderStyleFront("2px solid #c4c4c4");
      setBorderStyleBack("2px solid #c4c4c4");
      setImageUnselectedFront("/src/assets/quizzGame-front.png");
      setImageUnselectedBack("/src/assets/quizzGame-back.png");
    }
    if (category === "Front-end") {
      setChangeImageFront(true);
      setChangeImageBack(false);
      setChangeImageDevops(false);
      setImageUnselectedFront("/src/assets/quizzGame-select-front.png");
      setBorderStyleFront("2px solid #F52D7E");
      setBorderStyleDevops("2px solid #c4c4c4");
      setBorderStyleBack("2px solid #c4c4c4");
      setImageUnselectedDevops("/src/assets/quizzGame_devops.png");
      setImageUnselectedBack("/src/assets/quizzGame-back.png");
    }
    if (category === "Back-end") {
      setChangeImageBack(true);
      setChangeImageFront(false);
      setChangeImageDevops(false);
      setImageUnselectedBack("/src/assets/quizzGame-select-back.png");
      setBorderStyleBack("2px solid #F52D7E");
      setBorderStyleFront("2px solid #c4c4c4");
      setBorderStyleDevops("2px solid #c4c4c4");
      setImageUnselectedFront("/src/assets/quizzGame-front.png");
      setImageUnselectedDevops("/src/assets/quizzGame_devops.png");
    }
  };



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

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchQuestions();
    navigate("/games/questions", { state: { from: { pathname: from } } })
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // const handleChange = (event) => {
  //   setCategory(event.target.value);
  // };


  return (
    <div className="category">
      <h2>SELECTIONNE LE THEME DE TES QUESTIONS</h2>
      <div className="img-btn">
        <div className="category-img">
          <img
            onClick={() => imageSelected("DevOps")}
            src={imageUnselectedDevops}
            alt="devops-people"
            className="people"
            style={{ border: borderStyleDevops }}
          />
          <img
            src={imageUnselectedFront}
            onClick={() => imageSelected("Front-end")}
            alt="front-people"
            className="people"
            style={{ border: borderStyleFront }}
          />
          <img
            src={imageUnselectedBack}
            onClick={() => imageSelected("Back-end")}
            alt="back-people"
            className="people"
            style={{ border: borderStyleBack }}
          />
        </div>
        <button className="btn" onClick={handleSubmit}>Valider</button>
      </div>
    </div>
  );
}

export default CategoryQuestion;
