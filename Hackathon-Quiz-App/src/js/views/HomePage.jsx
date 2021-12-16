import React from "react";
import logo from "../../assets/img-people.png";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom";
import  RulesGame from "../components/RulesGame";
import BackGroundOne from "../components/BackGroundOne"
import Title from "../components/Title"
function HomePage() {
  const navigate = useNavigate();

  return (
    <BackGroundOne>
    <div className="grid-container">
      <div className="grid-child-left pg-accueil">
        <Title />
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
            <h2>Règles du jeu</h2>
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
    </BackGroundOne>
  );
}

export default HomePage;
