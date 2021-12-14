import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

//auth
import { RequireAuth } from "./features/auth/requireAuth";

//Pages
import HomePage from "./views/HomePage";
import GamesPage from "./views/GamesPage";
import HistoricPage from "./views/HistoricPage";
import ScorePage from "./views/ScorePage";
import NicknamePage from "./views/NicknamePage";

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
          <Route path="enter-nickname" element={<NicknamePage />}></Route>
          <Route
            path="/games"
            element={
              <RequireAuth>
                <GamesPage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/score"
            element={
              <RequireAuth>
                <ScorePage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/historic"
            element={
              <RequireAuth>
                <HistoricPage />
              </RequireAuth>
            }
          ></Route>
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
    fontSize: "2rem",
    fontWeight: "800",
  };
  return <div style={style}>Not Page Found</div>;
};
export default App;
