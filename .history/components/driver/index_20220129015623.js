import React, { useState,Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Input from "../../uikit/input"
import NavMenu from "../../uikit/nav"
import A from "../../uikit/button/atag"
import 'antd/dist/antd.css';
import { Select } from 'antd';
const { Option } = Select;


class Startpage extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://raw.githubusercontent.com/dav55566666/test/master/myapi2.json`)
      .then(res => {
        const posts = res.data.driver;
        this.setState({posts});
        console.log(posts)
      });
  }
  render(){
      let selectedcar = 0;
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
      return (
        <div className="startpage startpagedriver">
          <form>
            <div className='startpage_logined'>
              <NavMenu setactivlink={""}/>
              <div className='startpage_logined_cont'>
                <div className='startpage_logined_cont_top'>
                  <p>Выберите водителя из списка</p>
                  <Select defaultValue="Поиск" style={{ width: 120 }} onChange={handleChange}>
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
                    <A myclick={nextlink} addclass={"disabled"} href={"carview"} linktext={"Далее"} imgalt={"img"} imgsrc={"/icon/iconsright.svg"} />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
  }
}

export default Startpage;
