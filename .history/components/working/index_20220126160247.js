import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/button/atag"
import { useRouter } from "next/router";
const Working = () => {
    function sendwork(){

    }
    const setwor = (e, path) => {
        console.log(e.)
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
                <Input value={"ДАЛЕЕ"} className={"submit disbled"} type={"submit"} id={"setwork"} myclick={sendwork} />
            </form>
        </div>
    );
}

export default Working;
