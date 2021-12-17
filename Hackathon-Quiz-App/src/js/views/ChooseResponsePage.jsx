import React from "react";

import Title from "../components/Title";
import BackgroundThree from "../components/BackgroundThree";
import ChooseResponse from "../components/ChooseResponse";

function ChooseResponsePage() {
  return (
    <BackgroundThree>
      <div className="container-el-response">
        <div className="title-lines">
          <div>
            <Title />
          </div>
          <div className="lines-right gamesquestions">
            <div className="line-1 gamesquestions"></div>
            <div className="line-2 gamesquestions"></div>
          </div>
        </div>
        <div className="reponses">
          <ChooseResponse />
        </div>
      </div>
    </BackgroundThree>
  );
}

export default ChooseResponsePage;
