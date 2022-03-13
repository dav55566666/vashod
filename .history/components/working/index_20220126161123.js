import PropTypes from 'prop-types';
import React, { useRef, useState } from "react";
import Input from "../../uikit/input"
import { useRouter } from "next/router";
const Working = () => {
    function sendwork(){
        $.ajax() //call ajax
        .done((data) => {
          this.setState({ //this setState will re render the UI with the new state
            details: { //change the key value pairs as needed
              id: data.id,
              trackInfo: {
                title: data.title,
                artist: data.artist,
                album: data.album,
              },
              trackUrl: data.trackUrl,
              albumArt: data.albumArt,
            }
          })
        })
    }
    const setwor = (e, path) => {
        var workarray = document.getElementsByClassName("workbtn")
        for(var i = 0; i < workarray.length; i++){
            workarray[i].classList.remove("active")
            e.target.classList.add("active")
        }
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
                <Input value={"ДАЛЕЕ"} className={"submit disbled"} type={"button"} id={"setwork"} myclick={sendwork} />
            </form>
        </div>
    );
}

export default Working;
