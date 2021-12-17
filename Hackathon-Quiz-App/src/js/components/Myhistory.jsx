import React, { useEffect, useState } from "react";
import "../../css/Myhistory.css"

function Myhistory() {

  const [parties, setParties] = useState(null);

  // we will use async/awiat to fetch this data
  async function getData() {
    const player = 'andria'
    const response = await fetch(`https://api.quizz-game.andriacapai.com/v1/history/${player}`);
    const data = await response.json();
    console.log(reponse);
    // store the data into our parties variables
    setParties(data);
  }

  //add the use
  useEffect(() => {
    getData();
  }, []); // place the setBooks function in this array

  return (
    <div className="mainMyhistory">
      {parties && (
        <div className="parties">
          {parties.map((partie, index) => (
            <div key={index}>
              <h2>{partie.name}</h2>
            </div>
          ))}

        </div>
      )}
    </div>
  )
}

export default Myhistory;