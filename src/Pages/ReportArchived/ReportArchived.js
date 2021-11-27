import React from "react";

export const ReportArchived = () => {
  const reportArchived = JSON.parse(localStorage.getItem("report"));
  const MapReport = reportArchived.map((item) => {
    return (
      <div>
        sua resposta:{item.answer}
        <br />
        Questão:{item.question}
        <br />
        {item.quantity}
        <br />
        Resposta Correta {item.correct_answer}
      </div>
    );
  });

  return <div>{MapReport}</div>;
};
