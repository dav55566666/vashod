import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import H1 from "../uikit/pagetitle"
import WorkingCond from "../components/workingcond"

export default function Home(props) {
    return (
        <div className="carview page">
            <NavMenu setactivlink={"0"} />
            <Back href={"/"} />
            <H1 title={"УСЛОВИЯ РАБОТЫ"} />
            <WorkingCond />
        </div>
    )
}
