import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import Addcrash from "../components/addcrashed"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"1"} />
            <Back href={"/"} />
            <Addcrash />
        </div>
    )
}
