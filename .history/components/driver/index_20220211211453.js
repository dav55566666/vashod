import React, { useState,Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;
import $ from "jquery";
import api from '../../uikit/api'
class DriverPage extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(api.driverapi)
      .then(res => {
        const posts = res.data.driver;
        this.setState({posts});
        console.log(posts)
      });
  }
  render(){
      let selectedcar2 = 0;
      function handleChange2(value2) {
        selectedcar2=`${value2}`
        document.querySelector(".selectedcar h4").textContent= selectedcar2
        if(selectedcar2!="Поиск"){
          document.querySelector(".selectedcar").style.display= "block"
          document.querySelector(".buttonlink").classList.remove("disabled")
          console.log("sad")
        }else{
          document.querySelector(".selectedcar").style.display= "none";
          document.querySelector(".buttonlink").classList.add("disabled")
        }
      }
      function sendform(){
        
      }
      return (
        <div className="startpage startpagedriver">
            <div className='startpage_logined'>
              <NavMenu setactivlink={""}/>
              <form action='working'>
                <div className='startpage_logined_cont'>
                  <div className='startpage_logined_cont_top'>
                    <p>Выберите водителя из списка</p>
                    <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange2}>
                      {this.state.posts.map((post, index) =>
                        <Option key={index} value={post.drivername}><span className='selectedchek'></span>{post.drivername}</Option>
                      )}
                    </Select>
                  </div>
                  <div className='startpage_logined_cont_bottom'>
                    <div className='selectedcar'>
                      <p>Выбран водитель</p>
                      <h4></h4>
                    </div>
                    <div className='buttonnext'>
                      <Input value={"ДАЛЕЕ"} className={"submit disabled buttonlink"} type={"button"} id={"senddriv"} myclick={sendform} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
      );
  }
}

export default DriverPage;
