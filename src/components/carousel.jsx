import React from 'react';
import { Link } from 'react-router-dom';

import "../style/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'


function CarouselA() {
    return (
        <div className='div-pai'>
            <div className="div-carousel">
                <Carousel
                    className='carou'
                    autoPlay={true}
                    interval={3000} // Altera a imagem a cada 3 segundos
                    infiniteLoop={true}
                    showThumbs={false} // Não mostrar as miniaturas
                    showStatus={false}
                    showArrows={false}
                >
                    <div>
                        <img src={img1} alt="Imagem 1" />
                    </div>
                    <div>
                        <img src={img2} alt="Imagem 2" />
                    </div>
                    <div>
                        <img src={img3} alt="Imagem 3" />
                    </div>
                    <div>
                        <img src={img4} alt="Imagem 4" />
                    </div>
                    <div>
                        <img src={img5} alt="Imagem 5" />
                    </div>
                </Carousel>
                <Link to="/compra/7" >
                    <button className='visualizar' >Visualizar Produto</button>
                </Link>
                
            </div>
        </div>
    )

}

export default CarouselA;