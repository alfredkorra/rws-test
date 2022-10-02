import React from "react";
import Slider from "react-slick";
import { data } from "./sliderdata";
import logo from "../assets/replylogo.png";
import quots from "../assets/quots.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.scss";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
  ],
};

const SliderCard = () => {
  return (
    <div className="slider_container">
      <Slider {...settings}>
        {data.map((item, i) => (
          <div className="teaser" key={i}>
            <img src={logo} alt="" />
            <img src={quots} alt="" className="quots" />
            <p>{item.paragraph}</p>
            <h6>{item.name}</h6>
            <h5>{item.desc}</h5>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderCard;
