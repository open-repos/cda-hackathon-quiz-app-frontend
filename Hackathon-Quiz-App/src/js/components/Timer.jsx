import React from 'react'
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '../utils/localstorage';

// Random component
const Completionist = () => <span>Temps écoulé !</span>;
// Renderer callback with condition
const renderer = ({seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {seconds} s
        </span>
      );
    }
  };
function Timer({delayAccordingToMode}) {
    const [data, setData] = useState(
        { date: Date.now(), delay: delayAccordingToMode*1000 } //10 seconds
      );
      const wantedDelay = delayAccordingToMode*1000; //10 s


      useEffect(() => {
        const savedDate = getLocalStorageItem("timeUp");
        console.log(savedDate)
        if (savedDate != null && !isNaN(savedDate)) {
          const currentTime = Date.now();
          console.log(currentTime)
          const delta = parseInt(savedDate, 10) - currentTime;
    
          //Do you reach the end?
          if (delta > wantedDelay) {
            //Yes we clear uour saved end date
            if (getLocalStorageItem("timeUp").length > 0)
              removeLocalStorageItem("timeUp");
          } else {
            //No update the end date with the current date
            setData({ date: currentTime, delay: delta });
          }
        }
      }, []);

    return (
        <div>
    <Countdown
        // date={data.date + data.delay}
        date={data.date, data.delay}
        renderer={renderer}
        onStart={(delta) => {
          //Save the end date
          if (getLocalStorageItem("timeUp") == null)
          setLocalStorageItem(
              JSON.stringify(data.delay),
              "timeUp"
            );
        }}
        onComplete={() => {
          if (getLocalStorageItem("timeUp") != null)
            removeLocalStorageItem("timeUp");
        }}
      />
        </div>
    )
}

export default Timer
