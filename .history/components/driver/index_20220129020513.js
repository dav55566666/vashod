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
      function sendform(){
        var var1= selectedcar;
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
        <div className="startpage startpagedriver">
            <div className='startpage_logined'>
              <NavMenu setactivlink={""}/>
              <form action='working'>
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
                      <Input value={"ДАЛЕЕ"} className={"submit disabled buttonlink"} type={"submit"} id={"senddriv"} myclick={sendform} />
                    </div>
                  </div>
                </div>
              </form>
            </div>
        </div>
      );
  }
}

export default Startpage;
