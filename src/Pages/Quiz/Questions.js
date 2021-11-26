import React, { useContext, useState } from "react";
import { CardQuestions } from "../../Components/CardQuestions/CardQuestions";
import GlobalStateContext from "../../Global/GlobalStateContext";

export const Questions = () => {
  const { questions } = useContext(GlobalStateContext);
  const [reportSaved, setReportSaved] = useState();
  const [hits, setHits] = useState([
    {
      question: "",
      category: "",
      answer: "",
      correct_answer: "",
      incorrect_answer: "",
    },
  ]);

  const addAnswersTrue = (obj) => {
    const newHit = [
      ...hits,
      {
        question: obj.question,
        category: obj.category,
        answer: obj.correct_answer,
        correct_answer: obj.correct_answer,
        incorrect_answer: obj.incorrect_answers,
      },
    ];

    setHits(newHit);
  };

  const addAnswersFalse = (obj, res) => {
    const incorrect_answers = obj.incorrect_answers;
    const filterIncorrectAnswer = incorrect_answers.filter(
      (item) => item === res
    );

    const newHit = [
      ...hits,
      {
        question: obj.question,
        category: obj.category,
        answer: filterIncorrectAnswer[0],
        correct_answer: obj.correct_answer,
        incorrect_answer: incorrect_answers,
      },
    ];
    setHits(newHit);
    setReportSaved(localStorage.setItem("report", JSON.stringify(hits)));
  };

  const mostrarRelatorio = () => {
    const reportSaved = JSON.parse(localStorage.getItem("report"));
    console.log(reportSaved);
  };

  return (
    <div>
      <h1>Quiz</h1>
      {questions &&
        questions.map((item, index) => {
          return (
            <CardQuestions
              item={item}
              key={index}
              addAnswersTrue={addAnswersTrue}
              addAnswersFalse={addAnswersFalse}
            />
          );
        })}

      <button onClick={mostrarRelatorio}>ver último relatório</button>
    </div>
  );
};
