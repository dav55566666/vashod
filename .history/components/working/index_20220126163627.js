import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/input"
import { useRouter } from "next/router";
import $ from "jquery";

const Working = () => {
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
        document.querySelector(".inplabel").classList.add("nodis")
    };
    return (
        <div className="working">
            <form action='' method='POST'>
                <h4>Выберите условия работы водителя</h4>
                <div className='working_grid'>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>50/50</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>70/30</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>Аренда посуточная</button>
                    <button className='workbtn' type='button' onClick={(e) => setwor(e)}>Аренда почасовая</button>
                </div>
                <Input dis={true} value={"ДАЛЕЕ"} className={"submit disbled"} type={"button"} id={"setwork"} myclick={sendwork} />
            </form>
        </div>
    );
}

export default Working;
