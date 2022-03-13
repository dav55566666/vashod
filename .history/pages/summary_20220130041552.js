import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import Summary from "../components/summary"
import H1 from "../uikit/pagetitle"

export default function Home(props) {
    return (
        <div className="summary page">
            <NavMenu setactivlink={"0"} />
            <Back href={"/carview"} />
            <H1 title={"СВОДНЫЙ ЭКРАН"} />
            <p className="summarytitlep">Проверьте правильность внесенных данных</p>
            <Summary />
        </div>
    )
}
