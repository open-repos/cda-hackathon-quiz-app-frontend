import React, { useEffect, useState } from "react";
import "../../css/Myhistory.css"

export default function Myhistory() {

  const App = () => {
    const [myhistory, setMyhistory] = useState('');

    useEffect(() => {
      const api = "https://api.quizz-app.andriacapai.com/v1/history/:player"

    console.log(api, "api")

      const fetchData = async () => {
        try {
          const response = await fetch(api);
          const json = await response.json();
          setMyhistory(json.myhistory);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }, []);

    return (
      <Wrapper>
        <span className="mainMyhistory"> {data[0].myhistory} </span>
      </Wrapper>
    );
  }
}
