import React, { useRef, useState } from "react";
import $ from "jquery";

const EquipmentItem = ({name, price}) => {
    let pricen = 0;
    function myclick(e){
        if(e.target.nextSibling.textContent>1){
            pricen = e.target.nextSibling.textContent;
            pricen-=1;
            e.target.nextSibling.innerHTML = pricen
        }
    }
    function myclick2(e){
        pricen = e.target.previousSibling.textContent;
        pricen++;
        e.target.previousSibling.innerHTML = pricen
    }
    function remove(e){
        var var1 = e.target.parentElement.id;
        var elem = e.target.parentElement
        elem.parentNode.removeChild(elem);
        $.ajax({
            type:"POST",
            url:'http://localhost:7080/ajaxforjson/Testajax',
            data:{
                data1: var1
            },
            success:function(responsedata){
                alert("got response as "+"'"+responsedata+"'");
            }
        })
    }
    return (
        <div className='table_box_item'>
            <div className='name'>
                <p>{name}</p>
            </div>
            <div className='counet'>
                <button className="countminus" onClick={(e) => myclick(e)}></button>
                <span>1</span>
                <button className="countplus" onClick={(e) => myclick2(e)}></button>
            </div>
            <div className='price'>
                <p>{price} руб.</p>
            </div>
            <button className='removebtn' onClick={(e) => remove(e)}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5625 2.5H13.125V1.875C13.125 0.839453 12.2855 0 11.25 0H8.75C7.71445 0 6.875 0.839453 6.875 1.875V2.5H3.4375C2.57457 2.5 1.875 3.19957 1.875 4.0625V5.3125C1.875 5.6577 2.1548 5.9375 2.5 5.9375H17.5C17.8452 5.9375 18.125 5.6577 18.125 5.3125V4.0625C18.125 3.19957 17.4254 2.5 16.5625 2.5ZM8.125 1.875C8.125 1.53047 8.40547 1.25 8.75 1.25H11.25C11.5945 1.25 11.875 1.53047 11.875 1.875V2.5H8.125V1.875Z" fill="white"/>
                    <path d="M3.06152 7.1875C2.94999 7.1875 2.86112 7.2807 2.86644 7.39211L3.38206 18.2141C3.42972 19.2156 4.25237 20 5.25472 20H14.7461C15.7485 20 16.5711 19.2156 16.6188 18.2141L17.1344 7.39211C17.1397 7.2807 17.0509 7.1875 16.9393 7.1875H3.06152ZM12.5004 8.75C12.5004 8.40469 12.7801 8.125 13.1254 8.125C13.4707 8.125 13.7504 8.40469 13.7504 8.75V16.875C13.7504 17.2203 13.4707 17.5 13.1254 17.5C12.7801 17.5 12.5004 17.2203 12.5004 16.875V8.75ZM9.37542 8.75C9.37542 8.40469 9.65511 8.125 10.0004 8.125C10.3457 8.125 10.6254 8.40469 10.6254 8.75V16.875C10.6254 17.2203 10.3457 17.5 10.0004 17.5C9.65511 17.5 9.37542 17.2203 9.37542 16.875V8.75ZM6.25042 8.75C6.25042 8.40469 6.53011 8.125 6.87542 8.125C7.22073 8.125 7.50042 8.40469 7.50042 8.75V16.875C7.50042 17.2203 7.22073 17.5 6.87542 17.5C6.53011 17.5 6.25042 17.2203 6.25042 16.875V8.75Z" fill="white"/>
                </svg>
            </button>
        </div>
    );
}

export default EquipmentItem;
