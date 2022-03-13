import React from "react";
import Startpage from "../components/startspage"
import NavMenu from "../uikit/nav"
import Addcrash from "../components/addcrashed"
import Carspecifik from "../components/carspecifik"
import Carviewslider from "../components/vievcar"
import Equipment from "../components/equipment"
import Summary from "../components/summary"
import DriverPage from "../components/driver"
import WorkingCond from "../components/workingcond"
import Working from "../components/working"

export default function Home(props) {
  return (
    <div className="home">
      <NavMenu setactivlink={"0"} />
      <Startpage />
    </div>
  )
}
