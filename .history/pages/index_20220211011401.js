import React from "react";
import Startpage from "../components/startspage"
import Index from "../uikit/select"
import Back from "../uikit/back"
import NavMenu from "../uikit/nav"
import Addcrash from "../components/addcrashed"
import Carspecifik from "../components/carspecifik"
import H1 from "../uikit/pagetitle"
import Carviewslider from "../components/vievcar"
import Equipment from "../components/equipment"
import Summary from "../components/summary"
import WorkingCond from "../components/workingcond"
import Working from "../components/working"
export default function Home(props) {
  return (
    <div className="home">
      <Startpage />
      <div className="carview page">
          <Addcrash />
          <Carspecifik />
          <Back href={"/"} />
          <H1 title={"ВНЕШНИЙ ОСМОТР АВТОМОБИЛЯ"} />
          <Carviewslider />
          <Equipment />
          <Back href={"/"} />
          <H1 title={"УСЛОВИЯ РАБОТЫ"} />
          <Working />
          <Back href={"/"} />
          <H1 title={"УСЛОВИЯ РАБОТЫ"} />
          <WorkingCond />
      </div>
      <div className="driver">
        <Startpage />
      </div>
      <div className="summary_page page">
          <NavMenu setactivlink={"0"} />
          <Summary />
      </div>
    </div>
  )
}
