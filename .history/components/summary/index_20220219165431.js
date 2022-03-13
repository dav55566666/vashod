import React, { useState,Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";
import Input from "../../uikit/input"
import Back from "../../uikit/back"
import $ from "jquery";
import 'antd/dist/antd.css';
import { Select } from 'antd';
import H1 from "../../uikit/pagetitle"
const { Option } = Select;
import api from '../../uikit/api'
class Summary extends React.Component {
    state = {
      posts: [],
      posts2: [],
      posts3: [],
      posts4: []
    }
    componentDidMount() {
      axios.get(api.Summaryapi)
        .then(res => {
          const posts = res.data.driver;
          const posts2 = res.data.car;
          const posts4 = res.data.equip;
          this.setState({posts});
          this.setState({posts2});
          this.setState({posts4});
          console.log(posts)
        });
    }
    render() {
        function sendform(){
          const crasharray = document.querySelectorAll(".info_crashed_img")
          const info = {
            car: document.getElementById("postcar").textContent,
            driver: document.getElementById("username").textContent,
            worktupe: document.getElementById("worjtype").textContent,
            worktupe2: document.getElementById("pricework").textContent,
            workdays: document.getElementById("workdays").textContent,
            workprice: document.getElementById("workprceee").textContent,
            oil: document.getElementById("oilp").textContent,
            probeg: document.getElementById("probegp").textContent,
            bodycleanliness: document.getElementById("bodycleanliness").textContent,
            interiorcleanliness: document.getElementById("interiorcleanliness").textContent,
            wheels: document.getElementById("wheels").textContent,
            tread: document.getElementById("tread").textContent,
            wheels2: document.getElementById("wheels2").textContent,
            tread2: document.getElementById("tread2").textContent,
            additionalnotes: document.getElementById("additionalnotes").textContent
          }
          $.ajax({
                type:"POST",
                url:'http://localhost:7080/ajaxforjson/Testajax',
                data:{
                  data1: crasharray,
                  data2: info
                },
                success:function(responsedata){
                    alert("got response as "+"'"+responsedata+"'");
              }
          })
        }
        if (typeof window !== 'undefined') {
          var imgarray = []
          const crasharray = document.querySelectorAll(".info_crashed_img")
          var helper = 0;
          for(var g = 0; g < crasharray.length; g++){
            var arraymy = crasharray[g].getAttribute("data-src");
            var arraymy2 = [];
            arraymy2 = arraymy.split(",")
            for(var i = 0; i < arraymy2.length; i++){
              helper++
              imgarray.push("<img src='"+arraymy2[i]+"' />")
              crasharray[g].innerHTML = imgarray
              if(helper>=arraymy2.length){
                helper=0;
                imgarray = []
              }
            }
          }
        }
        function backto(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".workingcondpage").style.display = "block";
        }
        function editdriver(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".driver").style.display = "block";
        }
        function editworktime(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".workingcondpage").style.display = "block";
        }
        function editcrash(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".addcrashpage").style.display = "block";
        }
        function editcarspec(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".carspecifik").style.display = "block";
        }
        function editewuip(){
          document.querySelector(".summary_page").style.display = "none";
          document.querySelector(".equipment").style.display = "block";
        }
        return (
          <div className="summary">
              <Back href={backto} />
              <H1 title={"СВОДНЫЙ ЭКРАН"} />
              <p className="summarytitlep" >Проверьте правильность внесенных данных</p>
              <div className='summary_item'>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"caricon.svg"} />
                          <p>Автомобиль:</p>
                        </div>
                        <p className='itemval' id='postcar'>{posts.car}</p>
                      </div>
                      <a href='/'>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"usericon.svg"} />
                          <p>Водитель:</p>
                        </div>
                        <p className='itemval' id='username'></p>
                      </div>
                      <a onClick={editdriver}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"workuslov.svg"} />
                          <p>Условия работы: </p>
                        </div>
                        <p className='itemval'>
                          <span id='worjtype'></span>
                          <span id='pricework'></span>
                        </p>
                      </div>
                      <a onClick={editworktime}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"timeiconn.svg"} />
                          <p>Срок аренды:</p>
                        </div>
                        <p className='itemval' id='workdays'></p>
                      </div>
                      <a onClick={editworktime}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"priceiconnn.svg"} />
                          <p>Стоимость:</p>
                        </div>
                        <p className='itemval' id='workprceee'></p>
                      </div>
                      <a onClick={editworktime}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src={""+api.icon+"crashedicon.svg"} />
                        <p>ПОВРЕЖДЕНИЯ</p>
                      </div>
                      <a onClick={editcrash}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div id="summarycrash"></div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src={""+api.icon+"carseting.svg"} />
                        <p>ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ</p>
                      </div>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"oiliconn.svg"} />
                          <p>Топливо:</p>
                        </div>
                        <p className='itemval' id='oilp'></p>
                      </div>
                      <a onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"probegiconn.svg"} />
                          <p>Пробег:</p>
                        </div>
                        <p className='itemval' id='probegp'></p>
                      </div>
                      <a onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"bodycleanliness.svg"} />
                          <p>Чистота кузова:</p>
                        </div>
                        <p className='itemval' id='bodycleanliness'></p>
                      </div>
                      <a onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"interiorcleanliness.svg"} />
                          <p>Чистота салона:</p>
                        </div>
                        <p className='itemval' id='interiorcleanliness'></p>
                      </div>
                      <a onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src={""+api.icon+"wheelsicons.svg"} />
                        <p>Шины</p>
                        <p>Протектор</p>
                      </div>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"whhelsiconn.svg"} />
                          <p>Передние шины:</p>
                        </div>
                        <p className='itemval' id='wheels'></p>
                        <p className='itemval' id='tread'></p>
                      </div>
                      <a onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"whhelsiconn2.svg"} />
                          <p>Задние шины:</p>
                        </div>
                        <p className='itemval' id='wheels2'></p>
                        <p className='itemval' id="tread2"></p>
                      </div>
                      <a  onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src={""+api.icon+"additionalnotes.svg"} />
                        <p>ДОПОЛНИТЕЛЬНЫЕ ЗАМЕЧАНИЯ:</p>
                      </div>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <p className='itemval' id='additionalnotes'></p>
                      </div>
                      <a  onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='equipment_table'>
                  <div className='table_title'>
                      <p>КОМПЛЕКТАЦИЯ</p>
                      <p>Количество</p>
                      <p>Штраф в случае утери или порчи комплектующих</p>
                      <a  onClick={editewuip}>
                        <img src={""+api.icon+"peniconwhite.svg"} />
                      </a>
                  </div>
                  <div className="table_box" id='summaryequip'>
                </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src={""+api.icon+"violations.svg"} />
                        <p>НАРУШЕНИЯ:</p>
                      </div>
                      <a  onClick={editcarspec}>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <p className='itemval'>{this.state.posts.violations}</p>
                      </div>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <p>ШТРАФ:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.fine}</p>
                      </div>
                  </div>
              </div>
              <div className='summary_item_btn'>
                <Input value={"Начать Аренду"} className={"submit buttonlink"} type={"submit"} id={"senddriv"} myclick={sendform} />
                <Input value={"Завершить осмотр"} className={"submit buttonlink"} type={"submit"} id={"senddriv2"} myclick={sendform} />
              </div>
          </div>
        );
    }
}
export default Summary;
