import React from "react";
import { goToHome, goToQuiz } from "../../routes/coodinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ContainerButtonsGO, GeneralContainer } from "./styled";


export const StartGame = () => {
  const navigate = useNavigate();
  return (
    <GeneralContainer>
      <h1>Deseja iniciar o Quiz ?</h1>
      <ContainerButtonsGO>
        <Button variant="contained" onClick={() => goToQuiz(navigate)}>
          Start
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => goToHome(navigate)}
        >
          Cancel
        </Button>
      </ContainerButtonsGO>
    </GeneralContainer>
  );
};
