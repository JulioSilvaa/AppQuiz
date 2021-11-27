import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { goToReport, goToStartGame } from "./../../routes/coodinator";

export const Home = () => {
  const { getAllQuestions, qntQuestions, setQntQuestions } =
    useContext(GlobalStateContext);
  const navigate = useNavigate();

  const onChangeQuantity = (event) => {
    setQntQuestions(event.target.value);
  };

  const getQuestions = () => {
    getAllQuestions(qntQuestions);
    goToStartGame(navigate);
    setQntQuestions("");
  };

  return (
    <div>
      <h1>Seja Bem vindo ao Quiz</h1>
      <h3>Perguntas sobreconhecimentos gerais</h3>
      <h4>quantas questoes deseja responder ?</h4>
      <input type="number" onChange={onChangeQuantity} value={qntQuestions} />
      <button onClick={getQuestions}>Proximo</button>
      <button onClick={() => goToReport(navigate)}>Relatório salvo</button>
    </div>
  );
};
