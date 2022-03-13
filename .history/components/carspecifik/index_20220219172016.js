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
        posts: [],
        posts2: []
    }
    
    componentDidMount() {
    axios.get(api.wheelsapis)
        .then(res => {
            const posts = res.data.wheels;
            const posts2 = res.data.carinfo;
            this.setState({posts});
            this.setState({posts2});
            console.log(posts2)
        });
    }
    render(){
        function setli(){
            document.getElementById("km").checked = false;
            document.getElementById("litr").checked = true;
            document.getElementById("setvaluetype").textContent = "ЛИТРОВ"
            documenmt.querySelector("#pmax").textContent = this.state.posts2[0].oil
            documenmt.querySelector(".ant-slider-handle").setAttribute("aria-valuemax", this.state.posts2[0].oil)
        }
        function setkm(){
            document.getElementById("litr").checked = false;
            document.getElementById("km").checked = true;
            document.getElementById("setvaluetype").textContent = "Км"
            documenmt.querySelector("#pmax").textContent = this.state.posts2[0].km
            documenmt.querySelector(".ant-slider-handle").setAttribute("aria-valuemax", this.state.posts2[0].km)
        }
        function nextpage(){
            document.getElementById("oilp").textContent = document.querySelector(".ant-slider-handle").getAttribute("aria-valuenow")
            document.getElementById("probegp").textContent = document.getElementById("probeginp").value
            document.getElementById("bodycleanliness").textContent = document.getElementById("rc_select_1").parentElement.nextElementSibling.getAttribute("title")
            document.getElementById("interiorcleanliness").textContent = document.getElementById("rc_select_2").parentElement.nextElementSibling.getAttribute("title")
            document.getElementById("wheels").textContent = document.getElementById("rc_select_3").parentElement.nextElementSibling.textContent
            document.getElementById("tread").textContent = document.getElementById("treadinp").value
            document.getElementById("wheels2").textContent = document.getElementById("rc_select_4").parentElement.nextElementSibling.textContent
            document.getElementById("tread2").textContent = document.getElementById("treadinp2").value
            document.getElementById("additionalnotes").textContent = document.getElementById("dopinfo").value;
            document.querySelector(".driver").style.display = "block";
            document.querySelector(".carspecifik").style.display = "none";
        }
        function backto(){
            document.querySelector(".carspecifik").style.display = "none";
            document.querySelector(".equipment").style.display = "block";
        }
        return (
            <div className="carspecifik">
                <form action='/equipment'>
                    <div className='carspecifik_left'>
                        <Back href={backto} />
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
                                    <Slider defaultValue={30} max={this.state.posts2.carinfo.oil} />
                                    <p>1</p>
                                    <p id='pmax'>{this.state.posts2.carinfo.oil}</p>
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
                                <Select defaultValue="Чистый" id='rc_select_1'>
                                    <Option value="Грязный">Грязный</Option>
                                    <Option value="Чистый">Чистый</Option>
                                </Select>
                            </div>
                            <div className='carspecifik_left_selects_item'>
                                <img src={""+ api.icon +"salonicon.svg"} />
                                <p>Чистота салона</p>
                                <Select defaultValue="Чистый" id='rc_select_2'>
                                    <Option value="Грязный">Грязный</Option>
                                    <Option value="Чистый">Чистый</Option>
                                </Select>
                            </div>
                        </div>
                        <div className='dopzamech'>
                            <p>Дополнительные замечания:</p>
                            <textarea id='dopinfo'></textarea>
                        </div>
                        <A addclass={"noimg"} href={"carview"} myclick={nextpage} linktext={"Далее"}/>
                    </div>
                    <div className='carspecifik_right'>
                        <img src="icon/tirestop.svg" className='topimg' />
                        <div className='carspecifik_right_item'>
                            <div className='title'>
                                <img src={""+ api.icon +"tires.svg"} />
                                <p>Передние шины</p>
                            </div>
                            <Select defaultValue="Поиск" className='tires' id='rc_select_3'>
                                {this.state.posts.map((post, index) =>
                                    <Option key={index} id={post.id+post} value={post.wheelname}><img src={""+ api.icon +""+post.wheelseason+""} />{post.wheelname}</Option>
                                )}
                            </Select>
                            <div className='selectedcar'><img src={""+ api.icon +"snovicon.svg"} /><p>245/50 r20 nokian hakkapeliitta r3 suv 106r xl</p></div>
                            <label>Уровень протектора мм</label>
                            <input type="text" id='treadinp'/>
                        </div>
                        <div className='carspecifik_right_item'>
                            <div className='title'>
                                <img src={""+ api.icon +"tires1.svg"} />
                                <p>Задние шины</p>
                            </div>
                            <Select defaultValue="Поиск" className='tires' id='rc_select_4'>
                                {this.state.posts.map((post, index) =>
                                    <Option key={index} id={post.id+post} value={post.wheelname}><img src={""+ api.icon +""+post.wheelseason+""} />{post.wheelname}</Option>
                                )}
                            </Select>
                            <div className='selectedcar'><img src={""+ api.icon +"snovicon.svg"} /><p>245/50 r20 nokian hakkapeliitta r3 suv 106r xl</p></div>
                            <label>Уровень протектора мм</label>
                            <input type="text" id='treadinp2'/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Carspecifik;
