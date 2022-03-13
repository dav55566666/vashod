import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/thumbs/thumbs.min.css"
import SwiperCore, {
  Navigation,Pagination,Thumbs
} from 'swiper/core';

SwiperCore.use([Navigation,Pagination,Thumbs]);
const Carviewslider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="carviewslider">
            <div className='carviewslider_top'>
                <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                </Swiper>
                <Swiper loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                    <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Carviewslider;
