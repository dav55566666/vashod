import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation,Pagination
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination]);

const Carviewslider = () => {
    return (
        <div className="carviewslider">
            <div className='carviewslider_top'>
            <Swiper pagination={true,{clickable: true}} spaceBetween={10} navigation={{prevEl: ".prevslide", nextEl: ".nextslide"}} loop={true} className="mySwiper2">
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h3>Гордому оленю нужна помощь в лечении</h3>
                    <a>Помочь проекту</a>
                  </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carviewslider;
