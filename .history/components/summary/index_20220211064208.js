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
          console.log(posts2)
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
        return (
          <div className="summary">
              <Back href={"/carview"} />
              <H1 title={"СВОДНЫЙ ЭКРАН"} />
              <p className="summarytitlep" >Проверьте правильность внесенных данных</p>
              <div className='summary_item'>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"caricon.svg"} />
                          <p>Автомобиль:</p>
                        </div>
                        <p className='itemval' id='postcar'></p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"usericon.svg"} />
                          <p>Водитель:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.user}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"workuslov.svg"} />
                          <p>Условия работы: </p>
                        </div>
                        <p className='itemval'>{this.state.posts.workparametr}</p>
                      </div>
                      <a>
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
                        <p className='itemval'>{this.state.posts.days}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"priceiconnn.svg"} />
                          <p>Стоимость:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.price}</p>
                      </div>
                      <a>
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
                        <p className='itemval'>{this.state.posts.oil}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"probegiconn.svg"} />
                          <p>Пробег:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.probeg}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"bodycleanliness.svg"} />
                          <p>Чистота кузова:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.bodycleanliness}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"interiorcleanliness.svg"} />
                          <p>Чистота салона:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.interiorcleanliness}</p>
                      </div>
                      <a>
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
                        <p className='itemval'>{this.state.posts.wheels}</p>
                        <p className='itemval'>{this.state.posts.tread}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src={""+api.icon+"whhelsiconn2.svg"} />
                          <p>Задние шины:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.wheels2}</p>
                        <p className='itemval'>{this.state.posts.tread2}</p>
                      </div>
                      <a>
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
                        <p className='itemval'>{this.state.posts.additionalnotes}</p>
                      </div>
                      <a>
                        <img src={""+api.icon+"penicon.svg"} />
                      </a>
                  </div>
              </div>
              <div className='equipment_table'>
                  <div className='table_title'>
                      <p>КОМПЛЕКТАЦИЯ</p>
                      <p>Количество</p>
                      <p>Штраф в случае утери или порчи комплектующих</p>
                      <a>
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
                      <a>
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
          </div>
        );
    }
}
export default Summary;
