import React from "react";

import Title from "../components/Title";
import BackgroundThree from "../components/BackgroundThree";

function ChooseResponse() {
  return (
    <BackgroundThree>
      <div className="grid-container">
        <div className="grid-child-left">
          <Title />
          <div className="btn-container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                id="nickname"
                name="nickname"
                required
                minLength="3"
                placeholder="Choisi un pseudo/matricule ..."
                className="inpt"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <button className="btn" type="submit">
                Valider
              </button>
            </form>
          </div>
          <div>
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
        </div>

        <div className="grid-child-right">
          <div className="rules-header">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          <div className="img-logo">
            <img src={logo} alt="image-people" className="img-page-jouer" />
          </div>
        </div>
      </div>
    </BackgroundThree>
  );
}

export default ChooseResponse;
