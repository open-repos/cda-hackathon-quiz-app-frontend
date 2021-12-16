import React, { useEffect, useState } from "react";
import "../../css/MyHistory.css"

export default function History() {

  const App = () => {
    const [myparty, setMyparty] = useState('');

    useEffect(() => {
      const api = "https://api.quizz-app.andriacapai.com/v1/history"

      const fetchData = async () => {
        try {
          const response = await fetch(api);
          const json = await response.json();
          console.log(json.myparty);
          setMyparty(json.myparty);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }, []);

    return (
      <Wrapper>
        <span id="main-qmyparty"> {data[0].myparty} </span>
      </Wrapper>
    );
  }
}
