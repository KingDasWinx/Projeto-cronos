import CarouselCompra from "../components/carousel-compra";
import Comentario from "../components/comentarios";
import Header from "../components/header";
import SubHeader from "../components/sub-header";
import Footer from '../components/footer';
import InfosCompra from '../components/infos-compra';
import logocronos from '../assets/logo-cronos.png'
import logocronosbranca from '../assets/logo-cronos-branca.png'
import React, { useState } from 'react';
import { LoadingOutlined } from "@ant-design/icons";


function Compra() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false); // Desativa o estado de carregamento após algum tempo (simulando uma transição)
    }, 1000);

    return (
        <di>
            {loading ? (
                <div className="search-pai" >
                    <img src={logocronos} alt="" />
                    <LoadingOutlined className="search-loading" />
                </div>
            ) : (
                <div>
                    <Header />
                    <SubHeader />
                    <section className="compra-section">
                        <CarouselCompra />
                        <InfosCompra />
                    </section>
                    <Comentario />
                    <Footer />
                </div>
            )}
        </di>
    )
}

export default Compra;
