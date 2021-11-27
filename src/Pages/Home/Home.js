import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { useNavigate } from "react-router-dom";
import { goToReport, goToStartGame } from "./../../routes/coodinator";
import { Button,  TextField } from "@material-ui/core";
import { ContainerInputs } from "./style";

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
    <>
      <div>
        <h1>Seja Bem vindo ao Quiz</h1>
        <h3>Perguntas sobreconhecimentos gerais</h3>
        <h4>quantas questoes deseja responder ?</h4>
      </div>
      <ContainerInputs>
        <TextField
          label="Digite o Números de perguntas aqui"
          variant="outlined"
          type="number"
          onChange={onChangeQuantity}
          value={qntQuestions}
          required={"number"}
        />
        <Button variant="contained" color="success" onClick={getQuestions}>
          Proximo
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => goToReport(navigate)}
        >
          Relatório salvo
        </Button>
      </ContainerInputs>
    </>
  );
};
