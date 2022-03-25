import React from "react";
import "./imageslider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Imageslider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="Slider" {...settings}>
      <div className="Imageslider">
        <img src="/images/slider-badag.jpg" />
      </div>
      <div className="Imageslider">
        <img src="/images/slider-badging.jpg" />
      </div> 
      <div className="Imageslider">
        <img src="/images/slider-scale.jpg" />
      </div>
    </Slider>
  );
}
