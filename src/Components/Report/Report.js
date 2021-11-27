import React from "react";
import { CompareAnswers, ContainerIncorrectAnswers } from "./styled";

export const Report = ({ report }) => {
  return (
    <CompareAnswers>
      <h1>Resposta</h1>
      <h5>Questão:</h5>
      {report.question}
      <br />
      <h5>sua resposta:</h5>
      {report.answer}
      <br />
      <br />
      <h5>Resposta Correta:</h5>
      {report.correct_answer}
      <h5>Resposta Errada:</h5>
      <ContainerIncorrectAnswers>
        <p>{report.incorrect_answer[0]}</p>
        <p>{report.incorrect_answer[1]}</p>
        <p>{report.incorrect_answer[2]}</p>
      </ContainerIncorrectAnswers>
    </CompareAnswers>
  );
};
