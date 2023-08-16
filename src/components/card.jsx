import React from "react";
import "../style/card.css";
import { Link } from "react-router-dom";
import { array } from "../script/array";
import Heart from "./coracao";

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
              <div className="container-prices">
                <p className="old-price">{array.oprice}</p>
                <p className="new-price">{array.nprice}</p>
              </div>
              <div className="cora"><Heart/></div>
            </div>

            <Link to={`/compra/${array.id}`}>
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

