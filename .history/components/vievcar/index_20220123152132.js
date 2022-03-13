import React, { useRef, useState } from "react";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const Carviewslider = () => {
    return (
        <div className="carviewslider">
            <div className='carviewslider_top'>
            <Swiper className="mySwiper2">
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

export default Carviewslider;
