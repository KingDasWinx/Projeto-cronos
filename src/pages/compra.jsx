import CarouselCompra from "../components/carousel-compra";
import Comentario from "../components/comentarios";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import React from 'react';


function Compra() {
    return(
        <div>
            <Header/>
            <SubHeader/>
            <CarouselCompra/>
            <Comentario/>
        </div>
    )
}

export default Compra;