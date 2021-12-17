import React from "react";
import "../../css/ChooseResponse.css";

function ChooseResponse() {
  return (
    <div>
      <h3>Question 1</h3>
      <div className="question">
        <p id="main-question">Que veut dire l'acronyme SEO? </p>
      </div>
      <div className="responses">
        <div className="reponse">
          <p id="main-reponse">Search engine optimization </p>
          <p id="main-reponse">Search engine optimization </p>
        </div>
        <div className="responseSuite">
          <p id="main-reponse">Search engine optimization </p>
          <p id="main-reponse">Search engine optimization </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseResponse;
