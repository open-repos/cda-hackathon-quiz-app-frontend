import React from "react";
import logo from "../../assets/img-people.png";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom";
import  RulesGame from "../components/RulesGame";
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="grid-container">
      <div className="grid-child-left">
        <div className="title">
          <h1 id="main-title">
            <span>Quizz</span>
            <span className="br"></span>
            <span id="text-game">Game</span>
          </h1>
        </div>
        <div className="sec-img-lines">
          <img src={logo} alt="image-people" className="img-accueil" />
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
      </div>

      <div className="grid-child-right">
        <div className="rules-header">
          <div className="line-1"></div>
          <div className="rules-line">
            <h2>Règles du jeux</h2>
            <div className="line-2"></div>
          </div>
        </div>
        <div className="rules-btn-container">
          <RulesGame />
          <div className="btn-container">
            <button
              className="btn"
              onClick={() =>
                navigate("/enter-nickname", { state: { from: { pathname: "/home" } } })
              }
            >
              Commencer à jouer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
