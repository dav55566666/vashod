import React from "react";
import Startpage from "../components/startspage"

export default function Home(props) {
  componentDidMount() {
    fetch("http://v1html.villagecrm.ru/api/mechanic/?a=1&b=2")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.breeds
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }
  return (
    <div className="home">
      <Startpage />
    </div>
  )
}
