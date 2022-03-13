import React from "react";
import NavMenu from "../uikit/nav"
import Equipment from "../components/equipment"
import EquipmentItem from "../components/equipment/item"

export default function Home(props) {
    function countplus(e){
        var b = e.parentElement
        console.log(e.nextElement)
    }
    function countminus(e){
        var g = e.nextSibling
        console.log(g)
    }
    return (
        <div className="carview page">
            <NavMenu setactivlink={"1"} />
            <Equipment />
        </div>
    )
}
