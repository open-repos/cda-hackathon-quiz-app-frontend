import React from "react";

import '../../css/Resultat.css'

function Resultat() {
  return (
    <div className="resultat">
      <img className="img-people" src="/src/assets/img-people.png" alt="image-people" />
      <img className="img-resultat" src="/src/assets/laurel.png" alt="image-people" />
      <p className="pts">200 Points</p>
      <p className="p-resultat">Félicitations ! Tu fais partie des derniers survivants. </p>
      <button className="btn-resultat">RETOUR AU MENU</button>
    </div>
  );
}

export default Resultat;