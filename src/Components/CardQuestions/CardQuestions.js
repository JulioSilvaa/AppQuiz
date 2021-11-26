import React from "react";
import { ContainerCard } from "./estyleCard";

export const CardQuestions = ({ item, addAnswersTrue, addAnswersFalse }) => {
  return (
    <>
      <ContainerCard>
        <p>Nível: {item.difficulty}</p>
        <p>Categoria: {item.category}</p>
        <h4>{item.question}</h4>

        <div>
          <button onClick={() => addAnswersTrue(item)} type="submit">
            {item.correct_answer}
          </button>

          {item.incorrect_answers &&
            item.incorrect_answers.map((res) => {
              return (
                <button
                  onClick={() => addAnswersFalse(item, res)}
                  type="submit"
                >
                  {res}
                </button>
              );
            })}
        </div>
      </ContainerCard>
    </>
  );
};
