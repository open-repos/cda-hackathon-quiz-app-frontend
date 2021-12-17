import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../css/ChooseResponse.css";
import { getLocalStorageItem, setLocalStorageItem} from "../utils/localstorage";

function ChooseResponse() {
  const [question, setQuestion] = useState("");
  const [numQuestion, setNumQuestion] = useState(1);
  const [reponse, setReponse] = useState([""]);
  const [reponseChosen, setReponsChosen] = useState(null);
  const [modeQuestion, setModeQuestion] = useState(1);

  const[responseJuste, setReponseJuste] = useState(null)

  async function getLocalStorageInfo() {
    let LocalStorageQuestionsFetched = getLocalStorageItem("questionsFetched");
    let LocalStorageGameInfo = getLocalStorageItem("gameInfo");
    console.log("LocalStorageQuestionsFetched", LocalStorageQuestionsFetched);
    const responses = LocalStorageQuestionsFetched[numQuestion - 1].responses;
    console.log(responses);
    setModeQuestion(
      LocalStorageGameInfo.game.history[numQuestion - 1].gameModeId
    );
    setQuestion(LocalStorageQuestionsFetched[numQuestion - 1].content);
    await responsesPossibilities(LocalStorageGameInfo.game.history[numQuestion - 1].gameModeId,responses)
 
  }

  const responsesPossibilities =  async(mode, responses) => {
    if (mode === 1) {
      const reponseJuste = responses.filter(
        (reponseJuste) => reponseJuste.trueOrFalse === true
      );
      const resFalse = responses.filter(
        (res) => res.trueOrFalse === false
      );
      const wrongTableAnswers = randomWrongAnswers(resFalse);
  
      console.log(wrongTableAnswers,"wrongTableAnswers")
      console.log(reponseJuste,"reponseJuste")
      console.log(resFalse,"resFalse")
      const reponseJusteContent = reponseJuste[0].content
      const wrongAnswer = wrongTableAnswers.content
      console.log([reponseJusteContent, wrongAnswer])
      setReponseJuste(reponseJuste[0].content)
      setReponse([reponseJusteContent, wrongAnswer])
    } else {
      const reponseJuste = responses.filter(
        (reponseJuste) => reponseJuste.trueOrFalse === true
      );
      let allResponses = [];
      for ( let i = 0; i < responses.length; i++){
        allResponses[i] = responses[i]["content"];
      }
      console.log("res carre",allResponses)
      console.log(reponseJuste[0])
      setReponseJuste(reponseJuste[0])
      setReponse(allResponses)
    }
     
  };
  
  const handleSubmitReponse = async(repChosen)=>{
    console.log("repChosen",repChosen)
    let gameInfo=getLocalStorageItem("gameInfo")
        gameInfo.game.history[numQuestion-1].rightAnswer = responseJuste.content
        console.log("gameInfoLocalStorage", responseJuste.content)
        setLocalStorageItem(gameInfo, "gameInfo");
    // navigate("/games/questions", { state: { from: { pathname: from } } })
  }

  
  async function updateDisplayedInfoQuestion() {}


  const randomWrongAnswers = (items) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  useEffect(() => {
    getLocalStorageInfo();
    updateDisplayedInfoQuestion();
  }, []);

  return (
    <div className="contain-all">
      <div className="num-title-question">
        <div className="question-number">
          <p>Question {numQuestion}/10</p>
        </div>
        <div className="content-question quest">
          <h3>{question}</h3>
        </div>
        <div>Timer</div>
      </div>
      {modeQuestion === 1 ? (
        <div className="responses">
          <div className="reponse">
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[0])}>
              {reponse[0]}
            </button>
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[1])}>
              {reponse[1]}
            </button>
          </div>
          {/* <div className="responseSuite">
        <button className="btn-mode-response" onClick={()=>{}}>{reponse[3]}</button>
        <button className="btn-mode-response" onClick={()=>{}}>{reponse[4]}</button>
        </div> */}
        </div>
      ) : (
        <div className="responses">
          <div className="reponse">
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[0])}>
              {reponse[0]}
            </button>
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[1])}>
              {reponse[1]}
            </button>
          </div>
          <div className="responseSuite">
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[2])}>
              {reponse[2]}
            </button>
            <button className="btn-mode-response" onClick={()=>handleSubmitReponse(reponse[3])}>
              {reponse[3]}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ChooseResponse;
