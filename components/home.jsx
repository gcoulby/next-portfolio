import React, { useState, useEffect } from "react";
import About from "../components/about";
import Education from "../components/education";
import Nav from "../components/nav";
import Experience from "../components/experience";
import Publications from "../components/publications";
import Skills from "../components/skills";
import Interests from "../components/interests";
import Awards from "../components/awards";

function Index() {
  return (
    <>
      <Nav />
      <About id="about" />
      <hr className="m-0"></hr>
      <Education id="education" />
      <hr className="m-0"></hr>
      <Experience id="experience" />
      <hr className="m-0"></hr>
      <Publications id="publications" />
      <hr className="m-0"></hr>
      <Skills id="skills" />
      <hr className="m-0"></hr>
      <Interests id="interests" />
      <hr className="m-0"></hr>
      <Awards id="awards" />
    </>
  );
}

export default Index;
