import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Back from "../../uikit/back"
import H1 from "../../uikit/pagetitle"
import A from "../../uikit/button/atag"
import EquipmentItem from "../equipment/item"

const Equipment = () => {
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
                <A addclass={"noimg nextpagebtn"} onClick={sendform} href={""} linktext={"Далее"} />
            </div>
        </div>
    );
    
}

export default Equipment;
