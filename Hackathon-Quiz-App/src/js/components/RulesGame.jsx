import React from "react";
import "../../css/Rules.css";
function RulesGame() {
  return (
    <div className="scroll-container">
      <h3>Qu'est ce que le Quizz Game ?</h3>
      <p>Le Quizz Game est un quizz autour de 3 thèmes:</p>
      <ul>
        <li>Front-end</li>
        <li>Back-end</li>
        <li>DevOps</li>
      </ul>
      <p>
        Parmi 2 ou 4 propositions selon le mode de jeu choisi, 10 questions sont
        posées successivement. Les questions sont sous forme de texte et la
        réponse est à choisir parmi 4 propositions.
      </p>
      <p>
        Le score marqué dépend du mode de réponse choisi{" "}
        <span className="bold-text">(Duo/Carré).</span>
      </p>
      <h4>Déroulement d'une partie :</h4>
      <p>
        Le joueur indique son pseudo, il choisi le thème des questions
        auxquelles il devra répondre. Un enchainement de 10 questions est alors
        proposé par le jeu de manière aléatoire sur le thème choisi. Le joueur
        aura 15 secondes pour choisir son mode de réponse (Duo/Carré) Sinon le
        mode duo est proposé par défaut :
      </p>
      <ul>
        <li>
          Duo : 2 propositions possibles Le joueur dispose de 30 secondes pour
          répondre à une question de type DUO
        </li>
        <li>
          Carré : 4 propositions possibles Le joueur dispose de 60 secondes pour
          répondre à une question de type CARRÉdispose de 30 secondes pour
          répondre à une question de type DUO
        </li>
      </ul>
      <p>Si le temps est écoulé, aucune réponse n'est enregistrée</p>
      <h4>Score</h4>
      <p>
        Un score est donné pour chaque réponse en fonction du mode de réponse :
      </p>
      <ul>
        <li>Duo → Bonne réponse → 10 points</li>
        <li>Carré → Bonne réponse → 20 points</li>
        <li>0 points en cas de mauvaise réponse pour les 2 modes</li>
      </ul>
      <h4>Fin de la partie</h4>
      <p>
        Une partie se termine quand le joueur répond aux 10 questions. Le joueur
        peut à nouveau choisir un thème et un mode et commencer une nouvelle
        partie.
      </p>
    </div>
  );
}

export default RulesGame;
