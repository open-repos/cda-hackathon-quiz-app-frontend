import React from "react";

import "../../css/GamesPageBgThree.css";

import Title from "../components/Title";
import BackgroundResultat from "../components/BackgroundResultat";
import Resultat from "../components/Resultat";

function ResultatPage() {
  return (
    <BackgroundResultat>
      <div className="container-el">
        <div className="title-lines">
          <div>
            <Title />
          </div>
          <div className="lines-right gamesquestions">
            <div className="line-1 gamesquestions"></div>
            <div className="line-2 gamesquestions"></div>
          </div>
        </div>
        <div className="categories">
          <Resultat />
        </div>
        <div className="lines-left gamesquestions">
          <div className="line-1 gamesquestions"></div>
          <div className="line-2 gamesquestions"></div>
        </div>
      </div>
    </BackgroundResultat>
  );
}

export default ResultatPage;