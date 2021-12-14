import React from "react";
import logo from "../../assets/img-people.png";
import "../../css/Home.css";
import { useNavigate } from "react-router-dom"

function HomePage() {
    const navigate = useNavigate()

  return (
    <div className="grid-container">
      <div className="grid-child-left">
        <div className='title'>
          <h1 id="main-title">
            Quizz
            <span className="br"></span>
            Game
          </h1>
        </div>
        <div className="sec-img-lines">
          <img src={logo} alt="image-people" className="img-accueil" />
          <div className="line-1"></div>
          <div className="line-2"></div>
        </div>
      </div>

      <div className="grid-child-right">
        <div>
        <h2>Règles du jeux</h2>
        </div>
        <div>
        <ul>
          <li>Règle 1:</li>
          <li>Règle 2:</li>
          <li>Règle 3:</li>
        </ul>
        <div><button className="btn" onClick={() => navigate("/games",{state:{from:{pathname:"/home"}}})}>SUIVANT</button></div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
