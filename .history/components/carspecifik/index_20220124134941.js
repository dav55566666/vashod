import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import 'antd/dist/antd.css';
import './index.css';
import { Slider, Switch } from 'antd';

const Carspecifik = () => {
    return (
        <div className="carspecifik">
            <div className='carspecifik_left'>
                <Back href={"/"} />
                <H1 title={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} />
                <div className='oil'>
                    <div className='oil_left'>
                        <p></p>
                        <img src="/img/oilicon.svg" />
                    </div>
                    <div className='oilcentral'>
                        <div className='oilcentral_flex'>
                            <label>
                                <input type="checkbox" />
                                <span></span>
                                <p></p>
                            </label>
                            <label>
                                <input type="checkbox" />
                                <span></span>
                                <p></p>
                            </label>
                        </div>
                        <div className='oilcentral_range'>
                            <Slider defaultValue={30} disabled={disabled} max={60} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Carspecifik;
