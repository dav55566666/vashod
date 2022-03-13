import React from "react";
import NavMenu from "../uikit/nav"
import Summary from "../components/summary"

export default function Home(props) {
    return (
        <div className="summary_page page">
            <NavMenu setactivlink={"0"} />
            <Summary />
        </div>
    )
}
