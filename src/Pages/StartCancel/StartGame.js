import React from "react";
import { goToHome, goToQuiz } from "../../routes/coodinator";
import { useNavigate } from "react-router-dom";
export const StartGame = () => {
 const navigate = useNavigate()
  return (
    <>
      <h1>Deseja iniciar o Quiz ?</h1>
      <div>
        <button onClick={()=>goToQuiz(navigate)}>Start</button>
        <button onClick={()=>goToHome(navigate)}>Cancel</button>
      </div>
    </>
  );
};
