import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Constant/constant";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [questions, setQuestions] = useState([]);
  const [qntQuestions, setQntQuestions] = useState();

  const getAllQuestions = (qntQuestions) => {
    axios
      .get(`${BASE_URL}${qntQuestions}`)
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const data = {
    questions,
    qntQuestions,
    setQuestions,
    setQntQuestions,
    getAllQuestions,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
