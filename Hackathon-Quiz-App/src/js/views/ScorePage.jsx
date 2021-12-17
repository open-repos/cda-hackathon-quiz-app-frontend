import React, { useState, useEffect } from 'react'
import BackGroundThree from "../components/BackgroundThree"
import Title from "../components/Title"
import api from "../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { updateRankings } from "../features/game/gameSlice";
import "../../css/Score.css";
import RankingTable from '../components/rankingTable';
import { useNavigate,useLocation } from "react-router-dom";
import { setLocalStorageItem } from '../utils/localstorage';



function ScorePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let location = useLocation();
    let from = (location.state?.from?.pathname || location.pathname) ||"/";
    const [catfetch, setCatfetch] = useState("");
    const [scorefetch, setScorefetch] = useState("");
    const [nickname, setNickname] = useState("");
    let rankingStore = useSelector((state) => state.game.rankingInfo);
    let catChosen = '';
    let scoreChosen = '';

    useEffect(()=>{
      fetchRankings(catfetch ? catfetch : 'total', scorefetch === 'avg' ? true : false);
    }, [catfetch, scorefetch]);

    useEffect(()=>{
      fetchRankings();
    }, []);
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLocalStorageItem(nickname, "nickname")
      navigate("/history", { state: { from: { pathname: from } } })
    };

    async function fetchRankings(cat = 'total', avg = false) {
      try {
        const rankings = await api.get(`/rankings/${cat}/${avg}`);
        if (rankings.status === 200) {
          console.log(rankings)
          if (rankings.data.data) {
            dispatch(updateRankings(rankings.data.data));
            return rankings.data.data;
          }
        }
      } catch (err) {
        console.log(`Erreur lors de la requête : /rankings/${cat}/${avg}`);
      }
    }

    const handleChange = (event, type) => {
      if (type === 'category') {
        setCatfetch(event.target.value)
      } else if (type === 'score') {
        setScorefetch(event.target.value)
      }
      
      // await fetchRankings(catfetch ? catfetch : null, scorefetch === 'avg' ? true : false);
    }
    
    return (
      <BackGroundThree onLoad={(e) => fetchRankings()}>
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
            <div className="tableContainer">
            <div className="tableOptions">
              <select name="category" id="category-select" onChange={e => handleChange(e, 'category')}>
                <option value="">--Category--</option>
                <option value="total">Total</option>
                <option value="front">Front-end</option>
                <option value="back">Back-end</option>
                <option value="devOps">DevOps</option>
              </select>
              <select name="score" id="score-select" onChange={e => handleChange(e, 'score')}>
                <option value="">--Score--</option>
                <option value="total">Score total</option>
                <option value="avg">Score moyen</option>
              </select>
            </div>
            
            <RankingTable></RankingTable>
            </div>
          </div>
        </div>
      </BackGroundThree>
    )
}

export default ScorePage
