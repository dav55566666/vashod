import React from "react";
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import Summary from "../components/summary"
import H1 from "../uikit/pagetitle"

export default function Home(props) {
    return (
        <div className="summary_page page">
            <Summary />
        </div>
    )
}
