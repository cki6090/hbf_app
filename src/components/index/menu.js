import React from "react";
import { menuList } from "../data";
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function () {
    return (
        <div className="menu">
            <Swiper
                spaceBetween={10}
                slidesPerView={'auto'}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {menuList.map(data => (
                    <SwiperSlide>
                        <NavLink to={data.page}>
                            <div key={data.id}>{data.menu}</div>
                        </NavLink>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
