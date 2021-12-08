import React from "react";
import { Name, City } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return ( 
  <div id = "home">
    <h1 style = {{color: "firebrick"}}>{Name} is a Web Developer from {City}</h1>
  </div> );
}

export default Home;
