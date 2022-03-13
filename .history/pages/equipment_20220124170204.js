import React from "react";
import NavMenu from "../uikit/nav"
import Equipment from "../components/equipment"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"1"} />
            <Equipment />
        </div>
    )
}
