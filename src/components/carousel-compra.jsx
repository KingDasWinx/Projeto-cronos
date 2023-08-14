import React, { useState } from "react";
import "../style/carousel-compra.css";


import `${array.img}` from "../assets/apple-watch-black.png";
import img2 from "../assets/apple-watch-white.png";
import img3 from "../assets/apple-watch-orange.png";
import { array } from "../script/array";


function CarouselCompra() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const viewImg = [img1, img2, img3];
    const previmgs = [img1, img2, img3];



  const showImage = (index) => {
    setCurrentImageIndex(index);
  };

  const showNextImage = () => {
    const newIndex = (currentImageIndex + 1) % viewImg.length;
    setCurrentImageIndex(newIndex);
  };

  const showPrevImage = () => {
    const newIndex = (currentImageIndex - 1 + viewImg.length) % viewImg.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="container-carousel">
      <div id="container-imgsButtons">
        {previmgs.map((image, index) => (
          <div
            key={index}
            className={`prev-imgsButtons ${
              index === currentImageIndex ? "selected" : ""
            }`}
            onClick={() => showImage(index)}
          >
            <img
              className="prev-img"
              src={image}
              alt={`Prev Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="container-imgView">
        <button className="bubu" id="prevBtn" onClick={showPrevImage}>
          <ion-icon name="chevron-back" />
        </button>
        <div id="carousel">
          {viewImg.map((image, index) => (
            <img
              key={index}
              className={`view-img ${index === currentImageIndex ? "active" : ""}`}
              src={image}
              alt={`Image ${index + 1}`}
              style={{ display: index === currentImageIndex ? "block" : "none" }}
            />
          ))}
        </div>
        <button className="bubu" id="nextBtn" onClick={showNextImage}>
          <ion-icon name="chevron-forward" />
        </button>
      </div>
    </div>
  );
}

export default CarouselCompra;
