import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate,useLocation } from "react-router-dom";

import "../../css/CarreDuo.css"
import { getLocalStorageItem } from '../utils/localstorage'
import {modeChosen} from "../features/game/gameSlice"
function CarreDuo() {

    const dispatch = useDispatch();
    const [category, setCategory] = useState("")
    const [question, setQuestion] = useState("")
    const [numQuestion, setNumQuestion] = useState(1)
    const [numCategory, setNumCategory] = useState("")
    const [categoryImage,setCategoryImage] = useState("")
    const gameInfoStore = useSelector((state)=> state.game)


    const navigate = useNavigate();
    let location = useLocation();
    let from = (location.state?.from?.pathname || location.pathname) ||"/";
  

    async function checkCategoryChosen(){
      console.log("gameInfoStore",gameInfoStore)
        let categoryFromStore = gameInfoStore.currentCategory;
        let categoryFromStoreInsideGameInfo = gameInfoStore.gameInfo.categoryId;
        let categoryLocalSotrage = getLocalStorageItem("currentCategory")
        let LocalStorageGameInfo = getLocalStorageItem("gameInfo")
        console.log(LocalStorageGameInfo.game)
        let categoryFromLocalStorageInsideGameInfo = LocalStorageGameInfo.game.categoryId
        console.log("categoryLocalSotrage",categoryLocalSotrage)
        console.log("categoryFromStore:",categoryFromStore)
        console.log("categoryLocalSotrage:",categoryLocalSotrage)
        console.log("categoryFromStoreInsideGameInfo:",categoryFromStoreInsideGameInfo)
        console.log("categoryFromLocalStorageInsideGameInfo:",categoryFromLocalStorageInsideGameInfo)
        if (categoryFromStore !== null || categoryLocalSotrage !== null ){
            switch(categoryFromLocalStorageInsideGameInfo){
                case 1:
                    setCategoryImage("/src/assets/quizzGame-front.png");
                    setCategory("Front-end")
                  break
                case 2:
                    setCategoryImage("/src/assets/quizzGame-back.png");
                    setCategory("Back-end")
                  break
                case 3:
                    setCategoryImage("/src/assets/quizzGame_devops.png");
                    setCategory("DevOps")
                  break
                default:
                      return
              }
        }
    }

    const handleSubmitModeDuo = async()=>{
      setNumCategory(1)
      await updateModeChosen(1)
      navigate("/games/questions", { state: { from: { pathname: from } } })
    }

    const handleSubmitModeCarre = async()=>{
      setNumCategory(2)
      await updateModeChosen(2)
      navigate("/games/questions", { state: { from: { pathname: from } } })
    }

    async function getFromLocalStorageQuestionsFetched(){
      let LocalStorageQuestionsFetched = getLocalStorageItem("questionsFetched")
      console.log("LocalStorageQuestionsFetched",LocalStorageQuestionsFetched)
      setQuestion(LocalStorageQuestionsFetched[numQuestion-1].content)
     
    }

    async function updateModeChosen(modeId){
      console.log("questionId:numQuestion-1",numQuestion-1)
      console.log("gameModeId",numCategory)
       await dispatch(modeChosen({questionId:numQuestion-1,gameModeId:modeId}))
    }


    // useEffect(() => {
    //   updateModeChosen();
    //   }, [numCategory]);

      useEffect(() => {
        checkCategoryChosen();
        getFromLocalStorageQuestionsFetched();
        }, []);

    return (
      <div className='quest-cont-el'>
        <div className="question-number">
          <p>Question {numQuestion}/10</p>
        </div>
        <div className="container-duo-carre">
        <div>
            <img src={categoryImage} alt={category} className="cat-image"/>
        </div>
        <div className="content-question" >
         <h3>{question}</h3>   
        </div>
        <div>
        <div className='duo-carre' >
        <button className="btn-mode" onClick={handleSubmitModeDuo}>Duo</button>
        <button className="btn-mode" onClick={handleSubmitModeCarre}>Carré</button>
        </div>
        </div>
     </div>
     <div>
     </div>
     </div>
    )
}

export default CarreDuo
