import React, { useState, useEffect } from "react";
import SkillItem from "./skill-item";
function Skills() {
  const [skills, setSkills] = useState(
    [
      {
        title: "Javascript",
        level: "90",
        icon_type: "ic",
        icon_class: "akar-icons:javascript-fill",
      },
      {
        title: "React",
        level: "90",
        icon_type: "ic",
        icon_class: "akar-icons:react-fill",
      },
      {
        title: "Node.js",
        level: "60",
        icon_type: "ic",
        icon_class: "bxl:nodejs",
      },
      {
        title: "C#",
        level: "90",
        icon_type: "ic",
        icon_class: "mdi:language-csharp",
      },
      {
        title: "Python",
        level: "80",
        icon_type: "ic",
        icon_class: "bxl:nodejs",
      },
      {
        title: "C",
        level: "55",
        icon_type: "ic",
        icon_class: "mdi:language-c",
      },
      {
        title: "git",
        level: "80",
        icon_type: "ic",
        icon_class: "bi:git",
      },
      {
        title: "C++",
        level: "60",
        icon_type: "ic",
        icon_class: "mdi:language-cpp",
      },
      {
        title: "Arduino",
        level: "60",
        icon_type: "ic",
        icon_class: "cib:arduino",
      },
      {
        title: "Raspberry Pi",
        level: "60",
        icon_type: "ic",
        icon_class: "cib:raspberry-pi",
      },
      {
        title: "Microsoft Azure",
        level: "50",
        icon_type: "ic",
        icon_class: "mdi:microsoft-azure",
      },
      {
        title: "Google Cloud Platform",
        level: "40",
        icon_type: "ic",
        icon_class: "cib:google-cloud",
      },
      {
        title: "TensorFlow",
        level: "45",
        icon_type: "ic",
        icon_class: "cib:tensorflow",
      },
      {
        title: "R",
        level: "40",
        icon_type: "ic",
        icon_class: "mdi:language-r",
      },
      {
        title: "Java",
        level: "70",
        icon_type: "ic",
        icon_class: "mdi:language-java",
      },
      {
        title: "Unity",
        level: "50",
        icon_type: "ic",
        icon_class: "cib:unity",
      },
      {
        title: "Photoshop",
        level: "70",
        icon_type: "ic",
        icon_class: "cib:adobe-photoshop",
      },
      {
        title: "Illustrator",
        level: "90",
        icon_type: "ic",
        icon_class: "cib:adobe-illustrator",
      },
      {
        title: "Lua",
        level: "60",
        icon_type: "ic",
        icon_class: "cib:lua",
      },
      {
        title: "PHP",
        level: "80",
        icon_type: "ic",
        icon_class: "bxl:php",
      },
      {
        title: "HTML5",
        level: "99",
        icon_type: "ic",
        icon_class: "akar-icons:html-fill",
      },
      {
        title: "css3",
        level: "99",
        icon_type: "ic",
        icon_class: "akar-icons:css-fill",
      },
      {
        title: "Angular",
        level: "50",
        icon_type: "ic",
        icon_class: "akar-icons:angular-fill",
      },
      {
        title: "TypeScript",
        level: "60",
        icon_type: "ic",
        icon_class: "mdi:language-typescript",
      },
      {
        title: "Bash",
        level: "80",
        icon_type: "ic",
        icon_class: "codicon:terminal-bash",
      },
      {
        title: "Affinity Designer",
        level: "90",
        icon_type: "ic",
        icon_class: "simple-icons:affinitydesigner",
      },
      {
        title: "Bootstrap",
        level: "90",
        icon_type: "ic",
        icon_class: "simple-icons:bootstrap",
      },
      {
        title: "Docker",
        level: "65",
        icon_type: "ic",
        icon_class: "bxl:docker",
      },
    ].sort((a, b) => (a.level < b.level ? 1 : -1))
  );
  return (
    <>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          <p style={{ fontStyle: "italic" }}>*Scales denote confidence using language or tool</p>
          <ul className="list-inline dev-icons">
            {skills.map((skill, index) => (
              <SkillItem key={skill + index} {...skill} />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Skills;
