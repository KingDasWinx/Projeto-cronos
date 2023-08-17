import CarouselCompra from "../components/carousel-compra";
import Comentario from "../components/comentarios";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import Footer from '../components/footer';
import InfosCompra from '../components/infos-compra';
import logocronos from '../assets/logo-cronos.png'
import React, { useState } from 'react';
import { LoadingOutlined } from "@ant-design/icons";
import { array } from "../script/array";
import { useParams } from "react-router-dom";


function Compra() {
    const { id } = useParams()
    const productId = parseInt(id);
    const product = array.find(product => product.id === productId)

    console.log(product);

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false); // Desativa o estado de carregamento após algum tempo (simulando uma transição)
    }, 1000);

    return (
        <div>
            {loading ? (
                <div className="search-pai" >
                    <img src={logocronos} alt="" />
                    <LoadingOutlined className="search-loading" />
                </div>
            ) : (
                <div className="px">
                    <Header />
                    <SubHeader />
                    <section className="compra-section">
                        <div className="sub-detalhes" >
                        <CarouselCompra />
                        <div className="detalhes" >
                            <p className="testeee" >Descrição:</p>
                            <p className="testess" >{product.desc}</p>
                        </div>
                        </div>
                        <InfosCompra />
                    </section>
                    
                    <Comentario />
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Compra;
