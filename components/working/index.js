import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/input"
import { useRouter } from "next/router";
import $ from "jquery";
import H1 from "../../uikit/pagetitle"
import Back from "../../uikit/back"
const Working = () => {
    var settest = 0;
    function sendwork(){
        document.querySelector(".workingpage").style.display = "none";
        document.querySelector(".workingcondpage").style.display = "block";
        document.getElementById("worjtype").textContent = document.querySelector(".activework").textContent

    }
    const setwor = (e, path) => {
        var workarray = document.getElementsByClassName("workbtn")
        for(var i = 0; i < workarray.length; i++){
            workarray[i].classList.remove("activework")
            e.target.classList.add("activework")
        }
        settest = 3;
        document.querySelector("#setworkkk").classList.remove("disbled")
    };
    function backto(){
        document.querySelector(".workingpage").style.display = "none";
        document.querySelector(".driver").style.display = "block";
    }
    return (
        <div className='workingpage'>
            <Back href={backto} />
            <H1 title={"УСЛОВИЯ РАБОТЫ"} />
            <div className="working">
            <form action='' method='POST'>
                <h4>Выберите условия работы водителя</h4>
                <div className='working_grid'>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>50/50</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>70/30</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>Аренда посуточная</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>Аренда почасовая</button>
                </div>
                <Input dis={true} value={"ДАЛЕЕ"} className={"submit disbled"} type={"button"} id={"setworkkk"} myclick={sendwork} />
            </form>
        </div>
        </div>
    );
}

export default Working;
