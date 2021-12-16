import React, { useEffect, useState } from "react";
import "../../css/Question.css"
import data from "../../../data/question.json"

export default function Question() {

  const App = () => {
    const [question, setQuestion] = useState('');

    useEffect(() => {
      const api = "https://api.quizz-app.andriacapai.com/v1/history"

      const fetchData = async () => {
        try {
          const response = await fetch(api);
          const json = await response.json();
          console.log(json.question);
          setAdvice(json.question);
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
    }, []);

    return (
      <Wrapper>
        <span id="main-question"> {data[0].question} </span>
      </Wrapper>
    );
  }
}
