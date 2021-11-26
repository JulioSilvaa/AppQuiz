import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [questions, setQuestions] = useState([]);

  const getAllQuestions = () => {
    axios
      .get("https://opentdb.com/api.php?amount=2")
      .then((res) => {
        setQuestions(res.data.results);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    getAllQuestions();
  }, []);

  const data = {
    questions,
    setQuestions,
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
