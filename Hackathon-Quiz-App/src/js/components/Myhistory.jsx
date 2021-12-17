import React, { useEffect, useState } from "react";
import "../../css/Myhistory.css"

function Myhistory() {

  const [parties, setParties] = useState(null);
  const player = 'andria'
  // we will use async/awiat to fetch this data
  async function getData() {
    const response = await fetch(`https://api.quizz-game.andriacapai.com/v1/history/${player}`);
    const data = await response.json();

    // store the data into our parties variables
    setParties(data);
    console.log(parties)
  }

  //add the use
  useEffect(() => {
    getData();
    
  }, []); // place the setBooks function in this array

  return (
    <div>
      <span className="mainMyhistory"> '{parties}' </span>
    </div>
  );
}

export default Myhistory;