import { useState } from "react";
import logo from "../assets/img-main.png";
import "../css/App.css";

function App() {
  return (
    <div>
      <header>
        <p>Home</p>
        <p>Games</p>
        <p>Historique</p>
      </header>
      <div className="general">
        <main>
          <h1 id="main-title">Quiz Game</h1>
          <img src={logo} alt="image-bonhomme" class="img-accueil" />
          <h2>Règles du jeux</h2>
          <ul>
            <li>Règle 1:</li>
            <li>Règle 2:</li>
            <li>Règle 3:</li>
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
