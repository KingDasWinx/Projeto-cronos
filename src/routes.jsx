import React from "react";
import { BrowserRouter, Routes, Route, Link, RouterProvider } from 'react-router-dom';
import Home from "./pages/home";
import Compra from "./pages/compra";
import Search from "./pages/search";

const Rotas = () => {
  return(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/compra" element={<Compra/>} ></Route>
        <Route path="/search" element={<Search/>} ></Route>
    </Routes>
  )
};

export default Rotas;
