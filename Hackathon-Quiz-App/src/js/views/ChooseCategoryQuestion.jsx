import React from "react";

import "../../css/GamesPage.css";

import Title from "../components/Title";
import BackgroundThree from "../components/BackgroundThree";
import CategoryQuestion from "../components/CategoryQuestion";


function ChooseCategoryQuestion() {



  return (
    <BackgroundThree>
      <div className="grid-container">
        <div className="grid-child-left">
          <Title />
          <CategoryQuestion />
          <div className="lines-left">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>

        <div className="grid-child-right">
          <div className="lines-right">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>
      </div>
    </BackgroundThree>
  );
}

export default ChooseCategoryQuestion;
