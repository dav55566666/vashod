import React, { useState,Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Toplogo from "../../uikit/toplogo"
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
// const posts = ["Hyundai Sonata ВМ 1753 СР", "Hyundai Sonata ВМ 1753 СР1", "Hyundai Sonata ВМ 1753 СР2", "Hyundai Sonata ВМ 1753 СР3", "Hyundai Sonata ВМ 1753 СР4", "Hyundai Sonata ВМ 1753 СР5", "Hyundai Sonata ВМ 1753 СР6", "Hyundai Sonata ВМ 1753 СР7", "Hyundai Sonata ВМ 1753 СР8", "Hyundai Sonata ВМ 1753 СР9", "Hyundai Sonata ВМ 1753 СР10", "Hyundai Sonata ВМ 1753 СР11"]

class Startpage extends React.Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get(`https://raw.githubusercontent.com/dav55566666/test/master/myapi3.json`)
        .then(res => {
          const posts = res.request.responseText;
          this.setState({posts});
        });
    }
    render() {
        function nextlink(){
          e.preventDefault();
        };
        function handleChange(value) {
            selectedcar=`${value}`
            document.querySelector(".selectedcar h4").textContent= selectedcar
            if(selectedcar!="Поиск"){
                document.querySelector(".selectedcar").style.display= "block"
                document.querySelector(".buttonlink").classList.remove("disabled")
            }else{
                document.querySelector(".selectedcar").style.display= "none";
                document.querySelector(".buttonlink").classList.add("disabled")
            }
        }
        function showselect(){
            document.querySelector(".startpage_logined_cont").style.zIndex = "5555"
            document.querySelector(".startpage_logined_cont").style.opacity = "1"
        }
        return (
          <div className="startpage">
            <Toplogo />
            <div className='startpage_logined'>
              <NavMenu setactivlink={""} otherclass={"startmenu"} />
              <Input value={"ОСМОТР АВТОМОБИЛЯ"} className={"submit"} type={"button"} id={"vievcar"} myclick={showselect} />
              <div className='startpage_logined_cont'>
                <div className='startpage_logined_cont_top'>
                  <p>Выберите автомобиль из списка</p>
                  <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
                    {state.[posts].map(post =>
                      <Option value={post.carname}><span className='selectedchek'></span>{post.carname}</Option>
                    )}
                  </Select>
                </div>
                <div className='startpage_logined_cont_bottom'>
                  <div className='selectedcar'>
                    <p>Выбран автомобиль</p>
                    <h4></h4>
                  </div>
                  <div className='buttonnext'>
                    <A myclick={nextlink} addclass={"disabled"} href={"carview"} linktext={"Далее"} imgalt={"img"} imgsrc={"/icon/iconsright.svg"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Startpage;
