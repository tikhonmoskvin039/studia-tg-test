import React from "react";
import { Route, Routes } from "react-router-dom";
import Characters from "../pages/Characters/Characters";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default Router;
