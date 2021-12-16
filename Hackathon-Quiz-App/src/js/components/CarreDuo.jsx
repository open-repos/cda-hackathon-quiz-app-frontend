import React from "react";
import "../../css/carreDuo.css";

function CarreDuo() {
  return (
    <div className="main">
      <img src="../../assets/quizzGame_devops.png" alt="people-devops" />
      <div className="question">
        <p id="main-question">Que veut dire l'acronyme SEO? </p>
      </div>
      <p>AVEC QUEL MODE SOUHAITES-TU REPONDRE ?</p>
      <div className="duo-carre">
        <P>DUO</P>
        <P>CARRE</P>
      </div>
    </div>
  );
}

export default CarreDuo;
