import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import A from "../../uikit/button/atag"
import EquipmentItem from "../equipment/item"

const Equipment = () => {
    function sendform(){
        var equip = [];
        var equip_item = document.querySelectorAll(".table_box_item")
        for(var i = 0; i < equip_item.length; i++){
            let equipadd={
                eqipname: ""+equip_item[i].children[0].children[0].textContent+"",
                eqipinfo: ""+equip_item[i].children[1].children[1].textContent+"",
                eqipprice: ""+equip_item[i].children[2].children[0].textContent+""
            }
            equip.push(equipadd)
        }
        console.log(equipadd)
    }
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
                <EquipmentItem />
                <A addclass={"noimg nextpagebtn"} myclick={sendform} linktext={"Далее"} />
            </div>
        </div>
    );
    
}

export default Equipment;
