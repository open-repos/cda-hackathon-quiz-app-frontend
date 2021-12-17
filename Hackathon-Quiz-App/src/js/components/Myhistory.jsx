import React, { useEffect, useState } from "react";
import "../../css/Myhistory.css"
import api from "../utils/api";
import { getLocalStorageItem, setLocalStorageItem } from '../utils/localstorage';
import moment from 'moment';
import { useNavigate,useLocation } from "react-router-dom";

function Myhistory() {
  const [history, setHistory] = useState();
  const navigate = useNavigate();
  let location = useLocation();
  let from = (location.state?.from?.pathname || location.pathname) ||"/";

  // we will use async/await to fetch this data
  async function getData() {
    let player = getLocalStorageItem("nickname");

    try {
      const history = await api.get(`/history/${player}`);
      console.log(history)
      if (history.status === 200 || 304) {
        if (history.data.data) {
          console.log(history.data)
          setHistory(history.data.data);
        }
      }
    } catch (err) {
      console.log(`Erreur lors de la requête : /history/${player}`);
    }
  }

  function navDetails(event, game) {
    console.log(event);
    console.log(game);
    setLocalStorageItem(game, "historyDetails");
    navigate("/historyDetails", { state: { from: { pathname: from } } })
  }

  //add the use
  useEffect(() => {
    getData();
  }, []); // place the setBooks function in this array
  // 
  return (
    <div className="mainMyhistory">
      {history && (
        <div className="tableContainer">
          <p>Sélectionne ta partie pour voir son détail.</p>
          <table>
            <tbody>
              {history.map((game, index) => (
                <tr key={"item-" + (history.indexOf(game) + 1)} onClick={e => navDetails(e, game)}>
                  <td>Game {history.indexOf(game) + 1}</td>
                  <td>{ moment(game.createdAt).format('d/MM/YYYY - hh:mm') }</td>
                  <td>{game.category.name}</td>
                  <td>{game.score} pts</td>
                </tr> 
          ))}
            </tbody>
          </table>
          

        </div>
      )}
    </div>
  )
}

export default Myhistory;
