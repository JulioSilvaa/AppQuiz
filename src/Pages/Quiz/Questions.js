import React, { useContext, useState } from "react";
import { CardQuestions } from "../../Components/CardQuestions/CardQuestions";
import { Report } from "../../Components/Report/Report";
import GlobalStateContext from "../../Global/GlobalStateContext";
import { goToHome } from "./../../routes/coodinator";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ButtonsPageQuiz } from "./styled";

export const Questions = () => {
  const navigate = useNavigate();
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
      <ButtonsPageQuiz>
        <Button variant="contained" onClick={mostrarRelatorio}>
          Confirmar
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => goToHome(navigate)}
        >
          Home
        </Button>
      </ButtonsPageQuiz>
      {cardReport.length === questions.length ? cardReport : ""}
    </div>
  );
};
