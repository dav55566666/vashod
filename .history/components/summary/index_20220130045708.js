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
      posts: [],
      posts2: [],
      posts3: [],
      posts4: []
    }

    componentDidMount() {
      axios.get(`https://raw.githubusercontent.com/dav55566666/test/master/myapi3.json`)
        .then(res => {
          const posts = res.data.driver;
          const posts2 = res.data.driver;
          const posts3 = res.data.driver;
          const posts4 = res.data.driver;
          this.setState({posts});
          this.setState({posts2});
          this.setState({posts3});
          this.setState({posts4});
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
              <div className='summary_item'>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/caricon.svg" />
                          <p>Автомобиль:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.car}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/usericon.svg" />
                          <p>Водитель:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.user}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/workuslov.svg" />
                          <p>Условия работы: </p>
                        </div>
                        <p className='itemval'>{this.state.posts.workparametr}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/timeiconn.svg" />
                          <p>Срок аренды:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.days}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/priceiconnn.svg" />
                          <p>Стоимость:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.price}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src="/icon/carseting.svg" />
                        <p>ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ</p>
                      </div>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/oiliconn.svg" />
                          <p>Топливо:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.oil}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/probegiconn.svg" />
                          <p>Пробег:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.probeg}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/bodycleanliness.svg" />
                          <p>Чистота кузова:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.bodycleanliness}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/interiorcleanliness.svg" />
                          <p>Чистота салона:</p>
                        </div>
                        <p className='itemval'>{this.state.posts.interiorcleanliness}</p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src="/icon/" />
                        <p></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/" />
                          <p></p>
                        </div>
                        <p className='itemval'></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src="/icon/" />
                        <p></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/" />
                          <p></p>
                        </div>
                        <p className='itemval'></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src="/icon/" />
                        <p></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/" />
                          <p></p>
                        </div>
                        <p className='itemval'></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
              <div className='summary_item'>
                  <div className='summary_item_title'>
                      <div className='title_left'>
                        <img src="/icon/" />
                        <p></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
                  <div className='summary_item_info'>
                      <div className='info_left'>
                        <div className='info_left_title'>
                          <img src="/icon/" />
                          <p></p>
                        </div>
                        <p className='itemval'></p>
                      </div>
                      <a>
                        <img src="/icon/penicon.svg" />
                      </a>
                  </div>
              </div>
          </div>
        );
    }
}
export default Summary;
