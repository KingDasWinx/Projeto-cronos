import React, { useState } from "react";
import "../style/carousel-compra.css";


// import `${array.img}` from "../assets/apple-watch-black.png"; --------Essa merda ta bugano (:
// import img1 from "../assets/apple-watch-black.png";
// import img2 from "../assets/apple-watch-white.png";
// import img3 from "../assets/apple-watch-orange.png";
import { array } from "../script/array";


function CarouselCompra() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const img = array[2].img;
    const img1 = array[2].img1;
    const img2 = array[2].img2;
    const img3 = array[2].img3;

  const imagesView = [img, img1, img2, img3];

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
          {imagesView.map((image, index) => (
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
