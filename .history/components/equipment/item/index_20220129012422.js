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
        console.log(elem)
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
                
            </button>
        </div>
    );
}

export default EquipmentItem;
