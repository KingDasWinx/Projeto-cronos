import React, { useState } from "react";
import "../style/carousel-compra.css";

// import `${array.img}` from "../assets/apple-watch-black.png"; --------Essa merda ta bugano (:
// import img1 from "../assets/apple-watch-black.png";
// import img2 from "../assets/apple-watch-white.png";
// import img3 from "../assets/apple-watch-orange.png";
import { array } from "../script/array";
import { useParams } from "react-router-dom";


function CarouselCompra() {
  const { id } = useParams()

  const ft = array[id].img;
  const ft1 = array[id].img1;
  const ft2 = array[id].img2;
  const ft3 = array[id].img3;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesView = [ft, ft1, ft2, ft3];

  const showImage = (index) => {
    setCurrentImageIndex(index);
  };

  const showNextImage = () => {
    const newIndex = (currentImageIndex + 1) % imagesView.length;
    setCurrentImageIndex(newIndex);
  };

  const showPrevImage = () => {
    const newIndex = (currentImageIndex - 1 + imagesView.length) % imagesView.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="container-carousel">
      <div id="container-imgsButtons">
        {imagesView.map((image, index) => (
          <div
            key={index}
            className={`prev-imgsButtons ${index === currentImageIndex ? "selected" : ""
              }`}
            onClick={() => showImage(index)}
          >
            <img className="prev-img" src={image} alt=""/>
          </div>
        ))}
      </div>
      <div className="container-imgView">
        <button className="controls-button" id="prevBtn" onClick={showPrevImage}>
          <ion-icon name="chevron-back" />
        </button>
        <div id="carousel">
          {imagesView.map((image, index) => (
            <img
              key={index}
              className={`view-img ${index === currentImageIndex ? "active" : ""}`}
              src={image}
              alt=""
              style={{ display: index === currentImageIndex ? "block" : "none" }}
            />
          ))}
        </div>
        <button className="controls-button" id="nextBtn" onClick={showNextImage}>
          <ion-icon name="chevron-forward" />
        </button>
      </div>
    </div>
  );
}

export default CarouselCompra;
