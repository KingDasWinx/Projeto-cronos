import React, { useState } from "react";
import "../style/card.css";
import star from '../assets/star.svg'
import relo1 from '../assets/relo1.png'
import relo2 from '../assets/relo2.png'
import relo3 from '../assets/relo3.png'
import relo4 from '../assets/relo4.png'
import Heart from "./coracao";
import '../script/teste'

function Card() {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedImage(event.target.value);
    };
    return (
        <div class="card-main">
            <div class="rating-star">
                <ion-icon class="icones" name="star"></ion-icon>
                <p class="rating-value">5.0 </p>
            </div>

            <div class="carousel-inner container-images">
                <div class="carousel-item">
                    <img className="image" id="img1" src={relo1} alt="Image 1" />
                </div>
                <div class="carousel-item">
                    <img className="image" id="img2" src={relo2} alt="Image 2" />
                </div>
                <div class="carousel-item">
                    <img className="image" id="img3" src={relo3} alt="Image 3" />
                </div>
                <div class="carousel-item">
                    <img className="image" id="img4" src={relo4} alt="Image 3" />
                </div>
            </div>

            <div className="color-selectors">
                <label className="color-dot --b dot control" htmlFor="radio1"></label>
                <input type="radio" name="radio" id="radio1"  />

                <label className="color-dot --w dot control" htmlFor="radio2"></label>
                <input type="radio" name="radio" id="radio2"  />

                <label className="color-dot --o dot control" htmlFor="radio3"></label>
                <input type="radio" name="radio" id="radio3"  />

                <label className="color-dot --lb dot control" htmlFor="radio4"></label>
                <input type="radio" name="radio" id="radio4"  />
            </div>


            <h1 class="name-product">Épou Uati Cerial Ses</h1>

            <div class="container-foot">
                <div class="container-price">
                    <p class="old-price">4499.90</p>
                    <p class="new-price">2499.90</p>
                </div>
                <Heart />
            </div>

            <a href="https://youtube.com" target="_blank">
                <button class="buy-button bu"></button>
            </a>
        </div>
    )
}

export default Card;