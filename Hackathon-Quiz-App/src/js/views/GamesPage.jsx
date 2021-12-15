import React from 'react'
import { useGetQuestionsQuery } from "../services/gameApi"


function GamesPage() {
    const data = useGetQuestionsQuery('DevOps')
    console.log(data);
    
    return (
        <div>
            
        </div>
    )
}

export default GamesPage
