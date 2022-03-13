import PropTypes from 'prop-types';
import React, { useRef, useState, uploadFile } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import 'antd/dist/antd.css';
import { Slider, Switch, Select } from 'antd';
import A from "../../uikit/button/atag"
const { Option } = Select;
import $ from "jquery";
import axios from "axios";
import api from '../../uikit/api'
import Addcrashmodal from "../crashmodal"
class Carspecifik extends React.Component {
    state = {
        posts: []
    }
    
    componentDidMount() {
    axios.get(api.wheelsapis)
        .then(res => {
        const posts = res.data.car;
        this.setState({posts});
        console.log(posts)
        });
    }
    render(){
        function setli(){
            document.getElementById("km").checked = false;
            document.getElementById("litr").checked = true;
            document.getElementById("setvaluetype").textContent = "ЛИТРОВ"
        }
        function setkm(){
            document.getElementById("litr").checked = false;
            document.getElementById("km").checked = true;
            document.getElementById("setvaluetype").textContent = "Км"
        }
        function nextpage(){
            document.getElementById("oilp").textContent = document.getElementById("slider").getAttribute("aria-valuenow")
            document.getElementById("probegp").textContent = document.getElementById("probeginp").value
        }
        return (
            <div className="carspecifik">
                <form action='/equipment'>
                    <div className='carspecifik_left'>
                        <Back href={"/"} />
                        <H1 title={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} />
                        <div className='oil'>
                            <div className='oil_left'>
                                <p>Топливо</p>
                                <img src={""+ api.img +"oilicon.svg"} />
                            </div>
                            <div className='oilcentral'>
                                <div className='oilcentral_flex'>
                                    <label>
                                        <input type="checkbox" id='litr' checked="true" onClick={setli}/>
                                        <span></span>
                                        <p>В литрах</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" id='km' onClick={setkm}/>
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
                                <p id='setvaluetype'>ЛИТРОВ</p>
                            </div>
                        </div>
                        <div className='carspecifik_left_selects'>
                            <div className='carspecifik_left_selects_item'>
                                <img src={""+ api.icon +"probegicon.svg"} />
                                <p>Пробег (км)</p>
                                <input type="text" id='probeginp'/>
                            </div>
                            <div className='carspecifik_left_selects_item'>
                                <img src={""+ api.icon +"kuzovicon.svg"} />
                                <p>Чистота кузова</p>
                                <Select defaultValue="Чистый">
                                    <Option value="Грязный">Грязный</Option>
                                    <Option value="Чистый">Чистый</Option>
                                </Select>
                            </div>
                            <div className='carspecifik_left_selects_item'>
                                <img src={""+ api.icon +"salonicon.svg"} />
                                <p>Чистота салона</p>
                                <Select defaultValue="Чистый">
                                    <Option value="Грязный">Грязный</Option>
                                    <Option value="Чистый">Чистый</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='dopzamech'>
                            <p>Дополнительные замечания:</p>
                            <textarea></textarea>
                        </div>
                        <A addclass={"disabled noimg"} href={"carview"} myclick={nextpage} linktext={"Далее"}/>
                    </div>
                    <div className='carspecifik_right'>
                        <img src="icon/tirestop.svg" className='topimg' />
                        <div className='carspecifik_right_item'>
                            <div className='title'>
                                <img src={""+ api.icon +"tires.svg"} />
                                <p>Передние шины</p>
                            </div>
                            <Select defaultValue="Поиск" className='tires'>
                                <Option value="245/50 r20 nokian hakkapeliitta r3 suv 106r xl "><img src={""+ api.icon +"snovicon.svg"} />245/50 r20 nokian hakkapeliitta r3 suv 106r xl </Option>
                                <Option value="245/50 r20 nokian hakkapeliitta r3 suv 106r xl "><img src={""+ api.icon +"summericon.svg"} />245/50 r20 nokian hakkapeliitta r3 suv 106r xl </Option>
                            </Select>
                            <div className='selectedcar'><img src={""+ api.icon +"snovicon.svg"} /><p>245/50 r20 nokian hakkapeliitta r3 suv 106r xl</p></div>
                            <label>Уровень протектора мм</label>
                            <input type="text" />
                        </div>
                        <div className='carspecifik_right_item'>
                            <div className='title'>
                                <img src={""+ api.icon +"tires1.svg"} />
                                <p>Задние шины</p>
                            </div>
                            <Select defaultValue="Поиск" className='tires'>
                                <Option value="245/50 r20 nokian hakkapeliitta r3 suv 106r xl "><img src={""+ api.icon +"snovicon.svg"} />245/50 r20 nokian hakkapeliitta r3 suv 106r xl </Option>
                                <Option value="245/50 r20 nokian hakkapeliitta r3 suv 106r xl "><img src={""+ api.icon +"summericon.svg"} />245/50 r20 nokian hakkapeliitta r3 suv 106r xl </Option>
                            </Select>
                            <div className='selectedcar'><img src={""+ api.icon +"snovicon.svg"} /><p>245/50 r20 nokian hakkapeliitta r3 suv 106r xl</p></div>
                            <label>Уровень протектора мм</label>
                            <input type="text" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Carspecifik;
