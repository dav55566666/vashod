import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import 'antd/dist/antd.css';
import { Slider, Switch } from 'antd';

const Carspecifik = () => {
    return (
        <div className="carspecifik">
            <div className='carspecifik_left'>
                <Back href={"/"} />
                <H1 title={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} />
                <div className='oil'>
                    <div className='oil_left'>
                        <p>Топливо</p>
                        <img src="/img/oilicon.svg" />
                    </div>
                    <div className='oilcentral'>
                        <div className='oilcentral_flex'>
                            <label>
                                <input type="checkbox" />
                                <span></span>
                                <p>В литрах</p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span></span>
                                <p>На км</p>
                            </label>
                        </div>
                        <div className='oilcentral_range'>
                            <Slider defaultValue={30} max={60} />
                            <p>1</p>
                            <p>60</p>
                        </div>
                    </div>
                    <div className='oil_right'>
                        <span>20</span>
                        <p>ЛИТРОВ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carspecifik;
