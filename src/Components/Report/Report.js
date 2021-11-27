import React from "react";

export const Report = ({ report }) => {
  return (
    <div>
      <div>
        sua resposta:{report.answer}
        <br />
        Questão:{report.question}
        <br />
        {report.quantity}
        <br />
        Resposta Correta {report.correct_answer}
      </div>
    </div>
  );
};
