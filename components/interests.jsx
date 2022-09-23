import React, { useState, useEffect } from "react";
function Interests() {
  return (
    <>
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          <p>
            Aside to my professional skills I am also interested in music production and explore the development of music hardware and synthesis using
            technical skills acquired from researching IoT technologies. I am also fascinated by retro computing and have emulated several CPU
            architectures. I am currently developing an implementation of the Simple as Possible (SAP-1) computer (Malvino &amp; Brown, 1992) to
            improve my understanding of computer fundamentals. I also developed games for the Nintendo Gameboy, using C language: to keep my C skills
            (required for many embedded systems) current while researching. I am highly interested in embedded systems e.g., FPGA / Arduino /
            Raspberry Pi development. The latter skills, coupled with my experience working with architects and BIM, are what inspired me to begin
            researching IoT technologies for monitoring health, wellbeing, and Indoor Environment Quality (IEQ).
          </p>
        </div>
      </section>
    </>
  );
}

export default Interests;
