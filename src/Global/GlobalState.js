import axios from "axios";
import React, { useState, useEffect } from "react";
import GlobalStateContext from "./GlobalStateContext";

export const GlobalState = (props) => {
  const [questions, setQuestions] = useState([]);

  const getAllQuestions = () => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 useEffect(()=>{
   getAllQuestions()
 },[])

  return (
    <GlobalStateContext.Provider value={{}}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
