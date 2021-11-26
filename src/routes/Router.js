import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import { Questions } from "../Pages/Quiz/Questions";
import { ErrorPage } from "../Pages/Error/ErrorPage";
import { StartGame } from "../Pages/StartCancel/StartGame";

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="perguntas" element={<Questions />} />
          <Route path="startgame" element={<StartGame />} />
          <Route component={ErrorPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
