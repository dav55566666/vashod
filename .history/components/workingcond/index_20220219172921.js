import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/input"
import { useRouter } from "next/router";
import $ from "jquery";
import api from '../../uikit/api'
import H1 from "../../uikit/pagetitle"
import Back from "../../uikit/back"

const WorkingCond = () => {
    var settest = 0;
    let setstage = 0;
    function opendata(){
        if(setstage==0){
            document.querySelector(".time_right button").classList.add("active");
            document.querySelector(".time_right button").value=1;
            document.querySelector(".days_js p").style.display = "none";
            document.querySelector(".days_js span").style.display = "none";
            document.querySelector(".days_js button").style.display = "none";
            document.querySelector(".itog").style.display = "none";
            document.querySelector(".span_js").style.display = "none";
            document.querySelector(".itogp").style.color = "rgba(0, 0, 0, 0.2)";
            document.querySelector("#opendat").style.display = "block";
            setstage=1;
        }else{
            document.querySelector(".time_right button").classList.remove("active");
            document.querySelector(".days_js p").style.display = "block";
            document.querySelector(".days_js span").style.display = "block";
            document.querySelector(".time_right button").value=0;
            document.querySelector(".days_js button").style.display = "block";
            document.querySelector(".itog").style.display = "block";
            document.querySelector(".span_js").style.display = "block";
            document.querySelector(".itogp").style.color = "#000000";
            document.querySelector("#opendat").style.display = "none";
            setstage=0;
        }
    }
    function clousmodal(){
        document.querySelector(".workingcond_modal").style.display = "none"
    }
    function setdays(){
        document.querySelector(".workingcond_modal_cont h4").textContent = "Срок аренды"
        var setdaystext = 'Введите количество дней <input type="number" min="1" class="input text phonemask" id="coltext" value="">'
        document.querySelector(".workingcond_modal_cont .setdeypricelabel").innerHTML = setdaystext
        document.querySelector(".workingcond_modal").style.display = "flex"
    }
    function setprice(){
        document.querySelector(".workingcond_modal_cont h4").textContent = "Стоимость аренды"
        var setdaystext = 'Цена аренды за день дней <input type="number" min="1" class="input text phonemask" id="coltext" value="">'
        document.querySelector(".workingcond_modal_cont .setdeypricelabel").innerHTML = setdaystext
        document.querySelector(".workingcond_modal").style.display = "flex"
    }
    function savebtn(){
        if(document.querySelector(".workingcond_modal_cont h4").textContent == "Срок аренды"){
            var itograshet = document.querySelector(".workingcond_modal_cont input").value;
            var itograshet2 = document.querySelector("#setworkprice").textContent;
            var itograshet3 = itograshet*itograshet2;
            console.log(itograshet2 )
            document.querySelector(".itog").textContent = itograshet3
            document.querySelector(".koldays").textContent = itograshet
            document.querySelector(".workingcond_modal").style.display = "none"
        }else{
            var itograshet = document.querySelector(".workingcond_modal_cont input").value;
            var itograshet2 = document.querySelector(".price").textContent;
            var itograshet3 = itograshet*itograshet2;
            document.querySelector(".itog").textContent = itograshet3
            document.querySelector(".price").textContent = itograshet
            document.querySelector(".workingcond_modal").style.display = "none"
        }
    }
    function sendwork(){
        var var1= document.querySelector(".itog").textContent;
        var var2= document.querySelector(".koldays").textContent;
        var var3 = document.getElementById("setworkprice").textContent
        if(document.querySelector(".time_right button").value == 1){
            var1 = "Открытая дата"
            var2 = ""
        }
        document.getElementById("workdays").textContent = ""+var2+" дней"
        document.getElementById("workprceee").textContent = ""+var1+" р."
        document.getElementById("pricework").textContent = " / "+var3+"р/день"
        document.querySelector(".summary_page").style.display = "block";
        document.querySelector(".workingcondpage").style.display = "none";
    }
    function backto(){
        document.querySelector(".workingpage").style.display = "block";
        document.querySelector(".workingcondpage").style.display = "none";
    }
    return (
        <div className='workingcondpage'>
            <Back href={backto} />
            <H1 title={"УСЛОВИЯ РАБОТЫ"} />
            <div className="workingcond">
                <div className='workingcond_modal'>
                    <div className='workingcond_modal_cont'>
                        <button onClick={clousmodal} className='clousmodal'>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 0C13.1042 0 10.4271 0.713542 7.96875 2.14062C5.51042 3.56771 3.56771 5.51042 2.14062 7.96875C0.713542 10.4271 0 13.1042 0 16C0 18.8958 0.713542 21.5729 2.14062 24.0312C3.56771 26.4896 5.51042 28.4323 7.96875 29.8594C10.4271 31.2865 13.1042 32 16 32C18.8958 32 21.5729 31.2865 24.0312 29.8594C26.4896 28.4323 28.4323 26.4896 29.8594 24.0312C31.2865 21.5729 32 18.8958 32 16C32 13.1042 31.2865 10.4271 29.8594 7.96875C28.4323 5.51042 26.4896 3.56771 24.0312 2.14062C21.5729 0.713542 18.8958 0 16 0ZM16 30.0312C14.4792 30.0312 13.0052 29.7969 11.5781 29.3281C10.151 28.8594 8.86458 28.1875 7.71875 27.3125C6.57292 26.4375 5.56771 25.4271 4.70312 24.2812C3.83854 23.1354 3.17188 21.849 2.70312 20.4219C2.23438 18.9948 2 17.5208 2 16C2 14.1042 2.36979 12.2917 3.10938 10.5625C3.84896 8.83333 4.84375 7.34375 6.09375 6.09375C7.34375 4.84375 8.83333 3.84896 10.5625 3.10938C12.2917 2.36979 14.1042 2 16 2C17.8958 2 19.7083 2.36979 21.4375 3.10938C23.1667 3.84896 24.6562 4.84375 25.9062 6.09375C27.1562 7.34375 28.151 8.83333 28.8906 10.5625C29.6302 12.2917 30 14.1042 30 16C30 17.8958 29.6302 19.7083 28.8906 21.4375C28.151 23.1667 27.1562 24.6615 25.9062 25.9219C24.6562 27.1823 23.1667 28.1823 21.4375 28.9219C19.7083 29.6615 17.8958 30.0312 16 30.0312ZM21.6562 10.3438C21.4688 10.1562 21.2344 10.0625 20.9531 10.0625C20.6719 10.0625 20.4375 10.1562 20.25 10.3438L16 14.5938L11.75 10.3438C11.5625 10.1562 11.3281 10.0625 11.0469 10.0625C10.7656 10.0625 10.5312 10.1562 10.3438 10.3438C10.1562 10.5312 10.0625 10.7656 10.0625 11.0469C10.0625 11.3281 10.1562 11.5625 10.3438 11.75L14.5938 16L10.3438 20.25C10.2188 20.375 10.1302 20.5208 10.0781 20.6875C10.026 20.8542 10.026 21.026 10.0781 21.2031C10.1302 21.3802 10.2188 21.5312 10.3438 21.6562C10.5312 21.8438 10.7656 21.9375 11.0469 21.9375C11.3281 21.9375 11.5625 21.8438 11.75 21.6562L16 17.4062L20.25 21.6562C20.4375 21.8438 20.6719 21.9375 20.9531 21.9375C21.2344 21.9375 21.4688 21.8438 21.6562 21.6562C21.7812 21.5312 21.8698 21.3802 21.9219 21.2031C21.974 21.026 21.974 20.8542 21.9219 20.6875C21.8698 20.5208 21.7812 20.375 21.6562 20.25L17.4062 16L21.6562 11.75C21.8438 11.5625 21.9375 11.3281 21.9375 11.0469C21.9375 10.7656 21.8438 10.5312 21.6562 10.3438Z" fill="white"/>
                            </svg>
                        </button>
                        <h4>Срок аренды</h4>
                        <Input classlabel={"setdeypricelabel"} className={"text phonemask"} type={"text"} id={"coltext"} labeltext={"Введите количество дней"} mymask={"9999"} />
                        <Input value={"Сохранить"} className={"submit"} type={"button"} id={"savemodal"} myclick={savebtn} />
                    </div>
                </div>
                <form action='summary' method='POST'>
                    <div className='workingcond_box'>
                        <div className="workingcond_box_item">
                            <div className='time_left'>
                                <img src={''+api.icon+'timeicon.svg'} />
                                <div className='time_text'>
                                    <p>Срок аренды:</p>
                                    <div className='time_text_js days_js'>
                                        <span className='koldays'>17</span>
                                        <p className='days'>дней</p>
                                        <p id='opendat'>Открытая дата</p>
                                        <button type='button' onClick={setdays}>
                                            <img src={""+api.icon+"penicon.svg"} />
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
                                <img src={''+api.icon+'priceicon.svg'} />
                                <div className='time_text'>
                                    <p>Стоимость:</p>
                                    <div className='time_text_js'>
                                        <span className='price' id='setworkprice'>1300</span><span>р</span>
                                        <p>/день </p>
                                        <button type='button' value="0" onClick={setprice}>
                                            <img src={""+api.icon+"penicon.svg"} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className='time_right'>
                                <p className='itogp'>Итого:</p>
                                <span className='itog'>22 100</span>
                                <span className='span_js'>р.</span>
                            </div>
                        </div>
                    </div>
                    <Input classlabel={"ensublabel"} value={"Подтвердить"} className={"submit disbled"} type={"button"} id={"setwork"} myclick={sendwork} />
                </form>
            </div>
        </div>
    );
}

export default WorkingCond;
