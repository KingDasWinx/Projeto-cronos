import React, { useState } from "react";
import "../style/card.css";

import Heart from "./coracao";

import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { array } from "../script/array";

import watch1 from "../assets/apple-watch-white.png";
import watch2 from "../assets/apple-watch-white.png";
import watch3 from "../assets/apple-watch-orange.png";

function CardCarroussel() {
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

            e

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

export default CardCarroussel;
