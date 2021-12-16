import React, { useState } from "react";
import "../../css/CategoryQuestion.css";

function CategoryQuestion() {
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

    if (category === "devops") {
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
    if (category === "front") {
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
    if (category === "back") {
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

  return (
    <div className="category">
      <h2>SELECTIONNE LE THEME DE TES QUESTIONS</h2>
      <div className="img-btn">
        <div className="category-img">
          <img
            onClick={() => imageSelected("devops")}
            src={imageUnselectedDevops}
            alt="devops-people"
            className="people"
            style={{ border: borderStyleDevops }}
          />
          <img
            src={imageUnselectedFront}
            onClick={() => imageSelected("front")}
            alt="front-people"
            className="people"
            style={{ border: borderStyleFront }}
          />
          <img
            src={imageUnselectedBack}
            onClick={() => imageSelected("back")}
            alt="back-people"
            className="people"
            style={{ border: borderStyleBack }}
          />
        </div>
        <button className="btn">Valider</button>
      </div>
    </div>
  );
}

export default CategoryQuestion;
