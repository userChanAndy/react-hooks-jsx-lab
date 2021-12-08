import React from "react";
import { Image } from "../data/data";

function About() {
  return ( 
  <div id = "about">
    <h2>About Me</h2>
    <p>I am hungry</p>
    <img src = {Image} alt = "I made this" />
  </div> );
}

export default About;
