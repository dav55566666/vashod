import React from "react";
import Startpage from "../components/startspage"
import NavMenu from "../uikit/nav"
import Addcrash from "../components/addcrashed"
import Carspecifik from "../components/carspecifik"
import Carviewslider from "../components/vievcar"
import Equipment from "../components/equipment"
import Summary from "../components/summary"
import WorkingCond from "../components/workingcond"
import Working from "../components/working"

export default function Home(props) {
  console.log(selectedcar)
  return (
    <div className="home">
      <NavMenu setactivlink={"0"} />
      <Startpage />
      <Addcrash />
      <Carspecifik />
      <Carviewslider />
      <Equipment />
      <Working />
      <WorkingCond />
      <div className="driver">
        <Startpage />
      </div>
      <div className="summary_page page">
          <Summary />
      </div>
    </div>
  )
}
