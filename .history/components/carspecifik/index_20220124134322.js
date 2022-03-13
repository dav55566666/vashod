import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../uikit/back"
import H1 from "../uikit/pagetitle"

const Carspecifik = () => {
    return (
        <div className="carspecifik">
            <div className='carspecifik_left'>
                <Back href={"/"} />
                <H1 title={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} />
            </div>
        </div>
    );
}

export default Carspecifik;
