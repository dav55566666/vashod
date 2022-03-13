import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
SwiperCore.use([Pagination]);

const Addcrashmodal = ({swipers}) => {
    return (
        <div className="addcrashmodal">
            <div className='addcrashmodal_cont'>
                <button className='clousmodal'></button>
                <form>
                    <h4></h4>
                    <label>
                        <input type="text" />
                    </label>
                    <label>
                        <textarea></textarea>
                    </label>
                    <div className='swiper'>
                        <label>
                            <input type="file" />
                            <img src="/img/addphoto.svg" />
                        </label>
                        <Swiper slidesPerView={3} spaceBetween={30} pagination={{"clickable": true}} className="imgswiper">
                            {swipers}
                        </Swiper>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Addcrashmodal;
