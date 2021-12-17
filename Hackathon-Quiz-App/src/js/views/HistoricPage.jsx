import React from 'react'
// import { useGetHistoryQuery } from "../services/gameApi"
import Myhistory from "../components/Myhistory"
import Title from "../components/Title"
import "../../css/HistoricPage.css"
import BackGroundThree from "../components/BackGroundThree"

function HistoricPage() {
    // const data = useGetHistoryQuery('Nassim')
    // console.log(data)
    return (
        <BackGroundThree>
          <div className="grid-container">
          <div className="grid-child-left">
            <Title />
            <div>
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
            </div>

            <div className="grid-child-right">
              <div className="rules-header">
                <div className="line-1"></div>
                <div className="rules-line">
                  <h2>Historique</h2>
                  <div className="line-2"></div>
                </div>
              </div>
              <Myhistory />
            </div>
          </div>
        </BackGroundThree>
    )
}

export default HistoricPage
