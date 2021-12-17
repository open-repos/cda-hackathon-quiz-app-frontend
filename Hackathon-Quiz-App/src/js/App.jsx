import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

//auth
import { RequireAuth } from "./features/auth/requireAuth";

//Pages
import HomePage from "./views/HomePage";
// import GamesPage from "./views/GamesPage";
import HistoricPage from "./views/HistoricPage";
import ScorePage from "./views/ScorePage";
// import NicknamePage from "./views/NicknamePage";
import ChooseCategoryQuestion from "./views/ChooseCategoryQuestion";
import ChooseResponsePage from "./views/ChooseResponsePage";
import ChooseNickname from "./views/ChooseNickname";
import ChooseModeQuestion from "./views/ChooseModeQuestion";

function App() {

  return (
    <div>
      <header></header>
      <main>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          {/* <Route path="enter-nickname" element={<NicknamePage />}></Route> */}
          {/* <Route
            path="/games"
            element={<Navigate replace to="/games/nickname" />}
          > */}

            <Route path="/games/nickname" element={<ChooseNickname />}></Route>
            <Route
              path="/games/choose-category"
              element={<RequireAuth><ChooseCategoryQuestion /></RequireAuth>}
            ></Route>
            <Route path="/games/choose-mode" element={<RequireAuth><ChooseModeQuestion /></RequireAuth>}></Route>
            <Route path="/games/questions" element={<RequireAuth><ChooseResponsePage /></RequireAuth>}></Route>
          {/* </Route> */}
          <Route
            path="/score"
            element={
              <RequireAuth>
                <ScorePage />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/history"
            element={
              <RequireAuth>
                <HistoricPage />
              </RequireAuth>
            }
          ></Route>
          <Route path="/games" element={<Navigate replace to="/games/nickname" />} />
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
  const bgPage ={
    height:"100vh",
    width:"100vw",
    background: "linear-gradient(157.89deg, #292D3E 62.84%, #F52D7E 92.29%)"
  }
  return(<div style={bgPage}><div style={style}>Not Page Found</div></div>);
};
export default App;
