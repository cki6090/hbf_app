import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class SimpleSlider extends Component {
    render() {
        const settings = {                        
            dots: true,
            infinite: true,
            centerMode: true,
            adaptiveHeight: true,
            //fade: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerPadding: '0px'
        };
        return (
            <div className="sub_page">
                <div className="slider_box">
                    <Slider {...settings}>
                        <div>
                            <img src="img/img0.png" width="100%"></img>
                            <div>홈 이벤트 내용</div>
                        </div>
                        <div>
                            <img src="img/img1.jpg" width="100%"></img>
                            <div>홈 이벤트 내용</div>
                        </div>
                        <div>
                            <img src="img/img2.jpg" width="100%"></img>
                            <div>홈 이벤트 내용</div>
                        </div>
                        <div>
                            <img src="img/img3.jpg" width="100%"></img>
                            <div>홈 이벤트 내용</div>
                        </div>
                        <div>
                            <img src="img/img4.jpg" width="100%"></img>
                            <div>홈 이벤트 내용</div>
                        </div>
                    </Slider>
                </div>
                <div>123</div>
            </div>

        );
    }
}