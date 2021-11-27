import React, { useContext, useState } from "react";
import { CardQuestions } from "../../Components/CardQuestions/CardQuestions";
import { Report } from "../../Components/Report/Report";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToHome } from './../../routes/coodinator';
import { useNavigate } from 'react-router-dom';

export const Questions = () => {
  const navigate = useNavigate()
  const { questions } = useContext(GlobalStateContext);
  const [reportSaved, setReportSaved] = useState([]);
  const [hits, setHits] = useState([]);
  const reportQuestions = localStorage.setItem("report", JSON.stringify(hits));

  const addAnswersTrue = (obj) => {
    const newHit = [
      ...hits,
      {
        question: obj.question,
        quantity: 1,
        category: obj.category,
        answer: obj.correct_answer,
        correct_answer: obj.correct_answer,
        incorrect_answer: obj.incorrect_answers,
      },
    ];
    setReportSaved(localStorage.setItem("report", JSON.stringify(hits)));
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
        quantity: 1,
        answer: filterIncorrectAnswer[0],
        correct_answer: obj.correct_answer,
        incorrect_answer: incorrect_answers,
      },
    ];
    setHits(newHit);
  };

  const mostrarRelatorio = () => {
    setReportSaved(JSON.parse(localStorage.getItem("report")));
  };
  const cardReport =
    reportSaved &&
    reportSaved.map((report) => {
      return <Report report={report} />;
    });
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
      {cardReport.length === questions.length ? cardReport : ""}
      <button onClick={mostrarRelatorio}>Confirmar</button>
      <button onClick={()=>goToHome(navigate)}>Home</button>
    </div>
  );
};
