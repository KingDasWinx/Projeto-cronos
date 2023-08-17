import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Compra from "./pages/compra";
import Search from "./pages/search";
import Bag from "./pages/bag";


const Rotas = () => {
  return(
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/compra/:id" element={<Compra/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/sacola/:id" element={<Bag/>}></Route>
    </Routes>
  )
};

export default Rotas;
