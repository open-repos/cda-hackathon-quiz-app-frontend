import React from 'react'
import BackgroundThree from "../components/BackgroundThree";
import "../../css/GamesPageBgThree.css";
import Title from "../components/Title";
import CarreDuo from "../components/CarreDuo";

function ChooseModeQuestion() {
  return (
    <BackgroundThree>
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
          <CarreDuo />
        </div>
        <div className="lines-left gamesquestions">
          <div className="line-1 gamesquestions"></div>
          <div className="line-2 gamesquestions"></div>
        </div>
      </div>
    </BackgroundThree>
  )
}

export default ChooseModeQuestion
