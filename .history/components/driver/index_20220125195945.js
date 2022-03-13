import React, { useState } from 'react';
import Toplogo from "../../uikit/toplogo"
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;


const Startpage = ({selectedcar}) => {
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
        <div className='startpage_logined'>
          <NavMenu setactivlink={""}/>
          <div className='startpage_logined_cont'>
            <div className='startpage_logined_cont_top'>
              <p>Выберите водителя из списка</p>
              <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
                <Option value="Поиск"><span className='selectedchek'></span>Поиск</Option>
                <Option value="Петров Иван Иванович 1161"><span className='selectedchek'></span>Петров Иван Иванович 1161</Option>
                <Option value="Петров Иван Иванович 11611"><span className='selectedchek'></span>Петров Иван Иванович 11611</Option>
                <Option value="Петров Иван Иванович 11612"><span className='selectedchek'></span>Петров Иван Иванович 11612</Option>
                <Option value="Петров Иван Иванович 11613"><span className='selectedchek'></span>Петров Иван Иванович 11613</Option>
                <Option value="Петров Иван Иванович 11614"><span className='selectedchek'></span>Петров Иван Иванович 11614</Option>
                <Option value="Петров Иван Иванович 11615"><span className='selectedchek'></span>Петров Иван Иванович 11615</Option>
                <Option value="Петров Иван Иванович 11616"><span className='selectedchek'></span>Петров Иван Иванович 11616</Option>
                <Option value="Петров Иван Иванович 11617"><span className='selectedchek'></span>Петров Иван Иванович 11617</Option>
                <Option value="Петров Иван Иванович 11618"><span className='selectedchek'></span>Петров Иван Иванович 11618</Option>
                <Option value="Петров Иван Иванович 11619"><span className='selectedchek'></span>Петров Иван Иванович 11619</Option>
              </Select>
            </div>
            <div className='startpage_logined_cont_bottom'>
              <div className='selectedcar'>
                <p>Выбран водитель</p>
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

export default Startpage;
