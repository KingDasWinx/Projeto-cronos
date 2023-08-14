import React, { useState } from "react";
import "../style/card.css";
import watch1 from "../assets/apple-watch-black.png";

import Heart from "./coracao";

import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { array } from "../script/array";

function Card() {

  return (
    <div className="container-cards" >
      {array.map(array => {
        return (
          <div className="card-main">
            <div className="rating-star">
              <ion-icon className="icones" name="star"></ion-icon>
              <p className="rating-value">{array.ava}</p>
            </div>

            <div className="container-images">
              <img className="img-view" src={array.img} alt="" />
            </div>

            <ul className="color-selectors">
              <li className="color-dot --selected" style={{ backgroundColor: array.cor1 }} ></li>
              <li className="color-dot" style={{ backgroundColor: array.cor2 }}></li>
              <li className="color-dot" style={{ backgroundColor: array.cor3 }}></li>
            </ul>

            <h1 className="name-product">{array.title}</h1>

            <div className="container-foot">
              <div className="container-price">
                <p className="old-price">{array.oprice}</p>
                <p className="new-price">{array.nprice}</p>
              </div>
              <div className="cora"></div>
            </div>

            <Link to="/compra">
              {" "}
              <button className="buy-button bu"></button>{" "}
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default Card;


{/* 
<div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-inner">
        <div className="carousel-item active container-images">
            <img src={relo1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item container-images">
            <img src={relo2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item container-images">
            <img src={relo3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item container-images">
            <img src={relo4} className="d-block w-100" alt="..." />
        </div>
    </div>
    <div className="carousel-indicators color-selectors">
        <button
            className="color-dot"
            style={{ background: "#0000ff" }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
        ></button>
        <button
            className="color-dot"
            style={{ background: "#fff" }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-current="true"
            aria-label="Slide 2"
        ></button>
        <button
            className="color-dot"
            style={{ background: "#ff5e00" }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
        ></button>
        <button
            className="color-dot"
            style={{ background: "#000" }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
        ></button>
    </div>
</div> ------ Código do Moreira (Não alterado) */
}
