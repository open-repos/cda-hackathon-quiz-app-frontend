import React from 'react'
import { useGetHistoryQuery } from "../services/gameApi"
import Myhistoric from "../components/Myhistory"
import Title from "../components/Title"
import "../../css/HistoricPage.css"

function HistoricPage() {
    return (
        <div>
            <Title />
            <Myhistoric />
        </div>
    )
}

export default HistoricPage
