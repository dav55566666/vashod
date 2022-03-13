import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={0} />
            <Back href={"/"} />
        </div>
    )
}
