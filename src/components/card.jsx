import React, { useState } from "react";
import "../style/card.css";
import relo1 from '../assets/relo1.png'
import relo2 from '../assets/relo2.png'
import relo3 from '../assets/relo3.png'
import relo4 from '../assets/relo4.png'
import Heart from "./coracao";

import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";



function Card() {

    const produtos = [
        {
            title: "NexaWear Pro",
            ava: "5.0",
            nprice: "2499.90",
            oprice: "2999.90",
            cora: <Heart/>
        },
        {
            title: "OmniTech X",
            ava: "3.0",
            nprice: "3199.90",
            oprice: "4999.90",
            cora: <Heart/>
        },
        {
            title: "PulseGuard E",
            ava: "1.0",
            nprice: "2799.90",
            oprice: "2999.90",
            cora: <Heart/>
        },
        {
            title: "AeroLink V",
            ava: "4.5",
            nprice: "4499.90",
            oprice: "4999.90",
            cora: <Heart/>
        },
        {
            title: "ZeniSync Elite",
            ava: "5.0",
            nprice: "2299.90",
            oprice: "2799.90",
            cora: <Heart/>
        },
        {
            title: "VirtuWrist H",
            ava: "4.9",
            nprice: "4299.90",
            oprice: "5000.00",
            cora: <Heart/>
        },
        {
            title: "QuantumSn P",
            ava: "2.4",
            nprice: "3999.90",
            oprice: "4400.90",
            cora: <Heart/>
        },
        {
            title: "LuminaLink N",
            ava: "3.5",
            nprice: "3499.90",
            oprice: "3999.90",
            cora: <Heart/>
        },
        {
            title: "TechNova S",
            ava: "4.4",
            nprice: "2999.90",
            oprice: "3999.90",
            cora: <Heart/>
        },
        {
            title: "EvolveWear F",
            ava: "4.8",
            nprice: "4799.90",
            oprice: "5399.90",
            cora: <Heart/>
        }
    ]

    return (
        <div className="papi">
            {produtos.map(pro => {
                return (
                    <div class="card-main">

                        <div className="testee" >

                            <div class="rating-star">
                                <ion-icon class="icones" name="star"></ion-icon>
                                <p class="rating-value">{pro.ava}</p>
                            </div>

                            <div id="carouselExampleIndicators" class="carousel slide">

                                <div class="carousel-inner">
                                    <div class="carousel-item active container-images">
                                        <img src={relo1} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item container-images">
                                        <img src={relo2} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item container-images">
                                        <img src={relo3} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item container-images">
                                        <img src={relo4} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <div class="carousel-indicators color-selectors">
                                    <button class="color-dot" style={{ background: '#0000ff' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
                                    <button class="color-dot" style={{ background: '#fff' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2"></button>
                                    <button class="color-dot" style={{ background: '#ff5e00' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button class="color-dot" style={{ background: '#000' }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                            </div>


                            <h1 class="name-product">{pro.title}</h1>

                            <div class="container-foot">
                                <div class="container-price">
                                    <p class="old-price">{pro.oprice}</p>
                                    <p class="new-price">{pro.nprice}</p>
                                </div>
                                <div className="cora" >
                                    {pro.cora}
                                </div>
                            </div>

                               <Link to="/compra"> <button class="buy-button bu"></button> </Link>
                        </div>


                    </div>
                )
            })}
        </div>

    )
}

export default Card;