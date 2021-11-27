import React from "react";
import { ContainerCard } from "./styleCard";
import { Stack } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const CardQuestions = ({ item, addAnswersTrue, addAnswersFalse }) => {
  return (
    <>
      <ContainerCard>
        <p>Nível: {item.difficulty}</p>
        <p>Categoria: {item.category}</p>
        <h4>{item.question}</h4>

        <Stack>
          <Button
            variant="contained"
            onClick={() => addAnswersTrue(item)}
            type="submit"
          >
            {item.correct_answer}
          </Button>

          {item.incorrect_answers &&
            item.incorrect_answers.map((res) => {
              return (
                <Button
                  variant="contained"
                  onClick={() => addAnswersFalse(item, res)}
                  type="submit"
                >
                  {res}
                </Button>
              );
            })}
        </Stack>
      </ContainerCard>
    </>
  );
};
