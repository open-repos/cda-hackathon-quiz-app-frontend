import React, { useState } from "react";
import logo from "../../assets/img-people.png";
import "../../css/ChooseNickname.css";
import { useNavigate,useLocation } from "react-router-dom";
import BackGroundTwo from "../components/BackGroundTwo";
import Title from "../components/Title";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";


function ChooseNickname() {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();
  let location = useLocation();
  let from = (location.state?.from?.pathname || location.pathname) ||"/";
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("nickname.toLowerCase()", nickname.toLowerCase());
    // console.log('location',location)
    // console.log('from location', from)
    dispatch(login(nickname.toLowerCase()));
    //window.location.reload()
    navigate("/games/choose-category", { state: { from: { pathname: from } } })
  };



  return (
    <BackGroundTwo>
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
    </BackGroundTwo>
  );
}

export default ChooseNickname;
