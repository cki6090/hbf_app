import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      adaptiveHeight: false,
      //fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerPadding: "40px",
    };
    return (
      <div className="sub_page">
        <div className="slider_box">
          <Slider {...settings}>
            <div>
              <img src="img/img0.png" width="100%"></img>
            </div>
            <div>
              <img src="img/img0.png" width="100%"></img>
            </div>
            <div>
              <img src="img/img0.png" width="100%"></img>
            </div>
            <div>
              <img src="img/img0.png" width="100%"></img>
            </div>
            <div>
              <img src="img/img0.png" width="100%"></img>
            </div>
          </Slider>
        </div>
        <div>123</div>
      </div>
    );
  }
}
