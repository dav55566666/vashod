import React, { useState } from 'react';
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
import Toplogo from "../../uikit/toplogo"
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;

//myclick={sendlogin}
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
        <Toplogo />
        <div className='startpage_logined'>
          <NavMenu setactivlink={""} otherclass={"startmenu"} />
          <Input value={"ОСМОТР АВТОМОБИЛЯ"} className={"submit"} type={"button"} id={"vievcar"} myclick={showselect} />
          <div className='startpage_logined_cont'>
            <div className='startpage_logined_cont_top'>
              <p>Выберите автомобиль из списка</p>
              <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
                <Option value="Поиск"><span className='selectedchek'></span>Поиск</Option>
                {/* {posts.map((post) => (
                  <Option key={post.id} value={post.title}><span className='selectedchek'></span>{post.title}</Option>
                ))} */}
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

export default Startpage;
