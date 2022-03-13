import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import H1 from "../uikit/pagetitle"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"1"} />
            <Back href={"/"} />
            <H1 title={"ХАРАКТЕРИСТИКИ АВТОМОБИЛЯ"} />
        </div>
    )
}
