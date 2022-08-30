import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import AddForm from "../pages/AddForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<AddForm />} />
        <Route path="/detail" element={<Detail/>}  // /detail/:id로 수정해야함 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;