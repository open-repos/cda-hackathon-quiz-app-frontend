import React from 'react'
import Title from "../components/Title"
import "../../css/HistoricPageDetails.css"
import BackGroundThree from "../components/BackgroundThree"
import logo from "../../assets/img-people.png";
import { getLocalStorageItem } from '../utils/localstorage';
import moment from 'moment';

function HistoricPage() {
    let game = getLocalStorageItem("historyDetails");
    let player = getLocalStorageItem("nickname")

    function renderDetails() {
      console.log(game.histories);
      return game.histories.map(function(o) {
        return <div className="questionDetail">
                <p>Question {game.histories.indexOf(o) + 1} -- {o.gameMode.mode} -- {o.score} pts</p>
                <p>{o.question.content}</p>
                <p>Votre réponse : {o.response.content} -- {!o.rightAnswer ? 'Mauvaise réponse...' : 'Bonne réponse !'}</p>
                <p>{!o.rightAnswer ? 'La bonne réponse était : ' + o.goodAnswerWas : ''}</p>
              </div>
      })
    }

    return (
        <BackGroundThree>
          <div className="grid-container">
          <div className="grid-child-detail-left">
            <Title />
            <div>
              <div className="gameInfo">
                <div>
                  <span>{player}</span>
                  <span>{moment(game.createdAt).format('d/MM/YYYY - hh:mm')}</span>
                </div>
                <div>
                  <span>{game.category.name}</span>
                  <span>{game.score} pts</span>
                </div>
              </div>
              <div className="img-logo-small">
                <img src={logo} alt="image-people" className="img-page-jouer" />
              </div>
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            </div>

            <div className="grid-child-right">
              <div className="rules-header">
                <div className="line-1"></div>
                <div className="rules-line">
                  <h2>Historique</h2>
                  <div className="line-2"></div>
                </div>
              </div>
              <div className="gameDetails">
                {renderDetails()}
              </div>
            </div>
          </div>
        </BackGroundThree>
    )
}

export default HistoricPage
