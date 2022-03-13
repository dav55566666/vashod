import React, { useRef, useState } from "react";

const Carviewslider = () => {
    return (
        <div className="carviewslider">
            <div className='carviewslider_top'>
            <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} loop={true} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
            <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                <SwiperSlide>

                </SwiperSlide>
            </Swiper>
            </div>
        </div>
    );
}

export default Carviewslider;
