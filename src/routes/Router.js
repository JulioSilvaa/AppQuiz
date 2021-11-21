import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Questions } from "../Pages/Quiz/Questions";
import { ErrorPage } from "../Pages/Error/ErrorPage";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Perguntas" element={<Questions />} />
          <Route component={ErrorPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
