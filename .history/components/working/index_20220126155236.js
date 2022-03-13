import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/button/atag"

const Working = () => {
    function setwork(e){
        console.log(e)
        // e.classList.add("active")
    }
    function sendwork(){

    }
    return (
        <div className="working">
            <form action='' method='POST'>
                <h4>Выберите условия работы водителя</h4>
                <div className='working_grid'>
                    <button type='button' onClick={setwork()}>50/50</button>
                    <button type='button' onClick={setwork()}>70/30</button>
                    <button type='button' onClick={setwork()}>Аренда посуточная</button>
                    <button type='button' onClick={setwork()}>Аренда почасовая</button>
                </div>
                <Input value={"ДАЛЕЕ"} className={"submit disbled"} type={"submit"} id={"setwork"} myclick={sendwork} />
            </form>
        </div>
    );
}

export default Working;
