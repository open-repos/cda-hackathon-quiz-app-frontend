import React from 'react'
import { useGetHistoryQuery } from "../services/gameApi"

function HistoricPage() {
    const data = useGetHistoryQuery('Nassim')
    console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default HistoricPage
