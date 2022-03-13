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
    const setwor = (e, path) => {
        var workarray = document.getElementsByClassName("workbtn")
        for(var i = 0; i < workarray.length; i++){
            workarray[i].classList.remove("activework")
            e.target.classList.add("activework")
        }
        settest = 3;
        document.querySelector(".submit").classList.remove("disbled")
    };
    return (
        <div className="workingcond">
            <form action='' method='POST'>
                <div className='workingcond_box'>
                    <div className="workingcond_box_item">
                        <div className='time_left'>
                            <img src='/icon/timeicon.svg' />
                            <div className='time_text'>
                                <p>Срок аренды:</p>
                                <div className='time_text_js'>
                                    <span>17</span>
                                    <p>дней</p>
                                    <p id='opendat'>Открытая дата</p>
                                    <button type='button'>
                                        <img src="/icon/penicon.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='time_right'>
                            <p>Открытая дата</p>
                            <button type="button">
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
