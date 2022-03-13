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
const { Option } = Select;
// const posts = ["Hyundai Sonata ВМ 1753 СР", "Hyundai Sonata ВМ 1753 СР1", "Hyundai Sonata ВМ 1753 СР2", "Hyundai Sonata ВМ 1753 СР3", "Hyundai Sonata ВМ 1753 СР4", "Hyundai Sonata ВМ 1753 СР5", "Hyundai Sonata ВМ 1753 СР6", "Hyundai Sonata ВМ 1753 СР7", "Hyundai Sonata ВМ 1753 СР8", "Hyundai Sonata ВМ 1753 СР9", "Hyundai Sonata ВМ 1753 СР10", "Hyundai Sonata ВМ 1753 СР11"]

class Summary extends React.Component {
    state = {
      posts: []
    }

    componentDidMount() {
      axios.get(`https://raw.githubusercontent.com/dav55566666/test/master/myapi3.json`)
        .then(res => {
          const posts = res.data.car;
          this.setState({posts});
          console.log(posts)
        });
    }
    render() {
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
          <div className="summary">

          </div>
        );
    }
}
export default Summary;
