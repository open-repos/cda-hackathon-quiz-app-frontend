import React from "react";

import Title from "../components/Title";
import BackGroundThree from "../components/BackGroundThree";
import ChooseResponse from "../components/ChooseResponse";
import "../../css/ChooseResponse.css"
import "../../css/GamesPageBgThree.css";

function ChooseResponsePage() {
  return (
    <BackGroundThree>
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
    </BackGroundThree>
  );
}

export default ChooseResponsePage;
