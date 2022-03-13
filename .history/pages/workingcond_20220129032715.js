import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import H1 from "../uikit/pagetitle"
import Working from "../components/working"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"0"} />
            <Back href={"/"} />
            <H1 title={"УСЛОВИЯ РАБОТЫ"} />
            <Working />
        </div>
    )
}
