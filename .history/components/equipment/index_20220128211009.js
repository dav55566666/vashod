import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import A from "../../uikit/button/atag"

const Equipment = ({children}) => {
    return (
        <div className="equipment">
            <div className='equipment_top'>
                <div className='equipment_top_text'>
                    <Back href={"/"} />
                    <H1 title={"КОМПЛЕКТАЦИЯ"} />
                </div>
                <button>Добавить</button>
            </div>
            <div className='equipment_table'>
                <div className='table_title'>
                    <p>КОМПЛЕКТАЦИЯ</p>
                    <p>Количество</p>
                    <p>Штраф в случае утери или порчи комплектующих</p>
                </div>
                <div className='table_box'>
                    {children}
                </div>
                <A addclass={"noimg nextpagebtn"} href={"carview"} linktext={"Далее"} />
            </div>
        </div>
    );
    let equitparray = document.querySelectorAll(".table_box_item");
    for(var i = 0; i < equitparray.length; i++){
        equitparray[i].setAttribute("id","equip"+i+"")
    }
}

export default Equipment;
