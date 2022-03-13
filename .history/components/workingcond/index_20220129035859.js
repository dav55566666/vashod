import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/input"
import { useRouter } from "next/router";
import $ from "jquery";

const WorkingCond = () => {
    var settest = 0;
    function sendwork(){
        if(settest >0){
            var var1= document.querySelector(".activework").textContent;
            $.ajax({
                type:"POST",
                url:'http://localhost:7080/ajaxforjson/Testajax',
                data:{data1:var1},
                success:function(responsedata){
                    alert("got response as "+"'"+responsedata+"'");
                }
            })
        }
    }
    let setstage = 0;
    function opendata(){
        if(setstage==0){
            document.querySelector(".time_right button").classList.add("active");
            document.querySelector(".days_js p").style.display = "none";
            document.querySelector(".days_js span").style.display = "none";
            document.querySelector(".days_js button").style.display = "none";
            document.querySelector(".itog").style.display = "none";
            document.querySelector(".itogp").style.color = "rgba(0, 0, 0, 0.2)";
            document.querySelector("#opendat").style.display = "block";
            setstage=1;
        }else{
            document.querySelector(".time_right button").classList.remove("active");
            document.querySelector(".days_js p").style.display = "block";
            document.querySelector(".days_js span").style.display = "block";
            document.querySelector(".days_js button").style.display = "block";
            document.querySelector(".itog").style.display = "block";
            document.querySelector(".itogp").style.color = "#000000";
            document.querySelector("#opendat").style.display = "none";
            setstage=0;
        }
    }
    return (
        <div className="workingcond">
            <form action='' method='POST'>
                <div className='workingcond_box'>
                    <div className="workingcond_box_item">
                        <div className='time_left'>
                            <img src='/icon/timeicon.svg' />
                            <div className='time_text'>
                                <p>Срок аренды:</p>
                                <div className='time_text_js days_js'>
                                    <span>17</span>
                                    <p className='days'>дней</p>
                                    <p id='opendat'>Открытая дата</p>
                                    <button type='button'>
                                        <img src="/icon/penicon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='time_right'>
                            <p>Открытая дата</p>
                            <button type="button" onClick={opendata}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="workingcond_box_item">
                        <div className='time_left'>
                            <img src='/icon/priceicon.svg' />
                            <div className='time_text'>
                                <p>Стоимость:</p>
                                <div className='time_text_js'>
                                    <span>1300р</span>
                                    <p>/день </p>
                                    <button type='button'>
                                        <img src="/icon/penicon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='time_right'>
                            <p className='itogp'>Итого:</p>
                            <span className='itog'>22 100 р.</span>
                        </div>
                    </div>
                </div>
                <Input value={"Подтвердить"} className={"submit disbled"} type={"submit"} id={"setwork"} myclick={sendwork} />
            </form>
        </div>
    );
}

export default WorkingCond;
