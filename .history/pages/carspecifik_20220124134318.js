import React from "react";
import NavMenu from "../uikit/nav"
import Carspecifik from "../components/carspecifik"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"1"} />
            <Carspecifik />
        </div>
    )
}
