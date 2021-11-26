import React from "react";
import { useNavigate } from "react-router-dom";
import { goToStartGame } from "./../../routes/coodinator";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Seja Bem vindo ao Quiz</h1>
      <h3>Perguntas sobreconhecimentos gerais</h3>
      <h4>quantas questoes deseja responder ?</h4>
      <input type="number" />
      <button onClick={() => goToStartGame(navigate)}>Proximo</button>
    </div>
  );
};
