import React from "react";
import Startpage from "../components/startspage"
import { range } from "rxjs";
import { map, filter } from "rxjs/operators";
export default function Home(props) {
  componentDidMount() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&category_ids=1")
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
