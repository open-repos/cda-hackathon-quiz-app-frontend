import React, { useState } from 'react'
import BackGroundThree from "../components/BackGroundThree"
import Title from "../components/Title"
import { useDispatch } from "react-redux";
import "../../css/Score.css";

function ScorePage() {
    const dispatch = useDispatch();
    const [nickname, setNickname] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      // console.log("nickname.toLowerCase()", nickname.toLowerCase());
      // console.log('location',location)
      // console.log('from location', from)
      // dispatch(login(nickname.toLowerCase()));
      // navigate("/games", { state: { from: { pathname: from } } })
    };

    return (
      <BackGroundThree>
        <div className="grid-container">
          <div className="grid-child-left">
            <Title />
            <div className="btn-container">
              <form onSubmit={(e) => handleSubmit(e)}>
                <p>Pour connaitre ton score, entre ton pseudo</p>
                <div className="btn-container-actions">
                  <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  required
                  minLength="3"
                  placeholder="ex: Jean-Edern"
                  className="inpt"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  />
                  <button className="btn" type="submit">
                    Valider
                  </button>
                </div>
                
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
              <div className="rules-line">
                <h2>Classement</h2>
                <div className="line-2"></div>
              </div>
            </div>
            {/* <div className="img-logo">
              <img src={logo} alt="image-people" className="img-page-jouer" />
            </div> */}
          </div>
        </div>
      </BackGroundThree>
    )
}

export default ScorePage
