import React from "react";
import { ContainerReport } from "./styled";

export const ReportArchived = () => {
  const reportArchived = JSON.parse(localStorage.getItem("report"));
  const MapReport = reportArchived.map((item) => {
    return (
      <ContainerReport>
        <h5>Questão:</h5>
        {item.question}
        <br />
        <h5>sua resposta:</h5>
        {item.answer}
        <br />
        <br />
        <h5>Resposta Correta:</h5> {item.correct_answer}
      </ContainerReport>
    );
  });

  return <div>{MapReport}</div>;
};
