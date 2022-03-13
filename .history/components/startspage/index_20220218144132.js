import React, { useState,Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Toplogo from "../../uikit/toplogo"
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import $ from "jquery";
import 'antd/dist/antd.css';
import { Select } from 'antd';
import api from '../../uikit/api'
const { Option } = Select;
// const posts = ["Hyundai Sonata ВМ 1753 СР", "Hyundai Sonata ВМ 1753 СР1", "Hyundai Sonata ВМ 1753 СР2", "Hyundai Sonata ВМ 1753 СР3", "Hyundai Sonata ВМ 1753 СР4", "Hyundai Sonata ВМ 1753 СР5", "Hyundai Sonata ВМ 1753 СР6", "Hyundai Sonata ВМ 1753 СР7", "Hyundai Sonata ВМ 1753 СР8", "Hyundai Sonata ВМ 1753 СР9", "Hyundai Sonata ВМ 1753 СР10", "Hyundai Sonata ВМ 1753 СР11"]

class Startpage extends React.Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get(api.startpageapi)
        .then(res => {
          const posts = res.data.car;
          this.setState({posts});
          console.log(posts)
        });
    }
    render() {
        function handleChange(valuecar) {
           let  selectedcar=`${valuecar}`
            document.querySelector(".selectedcar h4").textContent= selectedcar
            if(selectedcar!="Поиск"){
                document.querySelector(".selectedcar").style.display= "block"
                document.querySelector(".buttonlink").classList.remove("disabled")
                document.querySelector('.startpage_logined_cont_top').setAttribute('data-text', selectedcar)
            }else{
                document.querySelector(".selectedcar").style.display= "none";
                document.querySelector(".buttonlink").classList.add("disabled")
            }
        }
        function showselect(){
            document.querySelector(".startpage_logined_cont").style.zIndex = "5555"
            document.querySelector(".startpage_logined_cont").style.opacity = "1"
        }
        function sendform(){
          var var1 = document.querySelector('.startpage_logined_cont_top').getAttribute('data-text');
              $.ajax({
                type:"POST",
                url:'http://localhost:7080/ajaxforjson/Testajax',
                data:{data1:var1},
                success:function(responsedata){
                    alert("got response as "+"'"+responsedata+"'");
              }
          })
        }
        return (
          <div className="startpage">
            <Toplogo />
            <div className='startpage_logined'>
              <Input value={"ОСМОТР АВТОМОБИЛЯ"} className={"submit"} type={"button"} id={"vievcar"} myclick={showselect} />
              <div className='startpage_logined_cont'>
                <div className='startpage_logined_cont_top'>
                  <p>Выберите автомобиль из списка</p>
                  <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
                    {this.state.posts.map((post, index) =>
                      <Option key={index} value={post.carname}><span className='selectedchek'></span>{post.carname}</Option>
                    )}
                  </Select>
                </div>
                <form action='summary'>
                  <div className='startpage_logined_cont_bottom'>
                    <div className='selectedcar'>
                      <p>Выбран автомобиль</p>
                      <h4></h4>
                    </div>
                    <div className='buttonnext'>
                      <Input value={"ДАЛЕЕ"} className={"submit disabled buttonlink"} type={"submit"} id={"senddriv"} myclick={sendform} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
export default Startpage;
