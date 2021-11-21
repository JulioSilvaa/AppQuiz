import React from "react";
import { ErrorConatainerPage } from "./styled";

export const ErrorPage = () => {
  return (
    <ErrorConatainerPage>
      <h3>Página não encontrada</h3>
      <iframe
        src="https://giphy.com/embed/lqFHf5fYMSuKcSOJph"
        width="480"
        height="270"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
        title="Gif de Erro"
      ></iframe>
    </ErrorConatainerPage>
  );
};
