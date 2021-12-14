import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

//auth
//import { RequireAuth } from "./utils/requireAuth";

//Pages
import HomePage from "./views/HomePage";
import GamesPage from "./views/GamesPage";
import HistoricPage from "./views/HistoricPage";
import ScorePage from "./views/ScorePage";

function App() {
  return (
    <div>
      {/* <header>
        <p>Home</p>
        <p>Games</p>
        <p>Historique</p>
      </header> */}
      <header></header>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/games" element={<GamesPage />}></Route>
          <Route path="/score" element={<ScorePage />}></Route>
          <Route path="/historic" element={<HistoricPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export const NotFound = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-50px",
    marginLeft: "-120px",
    fontSize:"2rem",
    fontWeight:"800",

  };
  return <div style={style}>Not Page Found</div>;
};
export default App;
