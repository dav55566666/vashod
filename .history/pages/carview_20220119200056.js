import React from "react";
import Back from "../uikit/back"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={0} />
            <Back href={"/"} />
        </div>
    )
}
