import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavItem from "./nav-item";
import { v4 } from "uuid";

function Nav() {
  const [navItems, setNavItems] = useState([
    {
      anchor: "#about",
      icon: "fa fa-user",
      title: "About",
      active: false,
    },
    {
      anchor: "#education",
      icon: "fa fa-graduation-cap",
      title: "Education",
      active: false,
    },
    {
      anchor: "#experience",
      icon: "fa fa-signal",
      title: "Experience",
      active: false,
    },
    {
      anchor: "#publications",
      icon: "fa fa-book",
      title: "Publications",
      active: false,
    },
    {
      anchor: "#skills",
      icon: "fa fa-code",
      title: "Skills",
      active: false,
    },
    {
      anchor: "#interests",
      icon: "fa fa-podcast",
      title: "Interests",
      active: false,
    },
    {
      anchor: "#awards",
      icon: "fa fa-trophy",
      title: "Awards",
      active: false,
    },
    {
      anchor: "/projects",
      icon: "fa fa-tasks",
      title: "Projects",
      active: false,
    },
  ]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <AnchorLink className="navbar-brand js-scroll-trigger" to="/">
          <span className="d-block d-lg-none">Graham Coulby</span>
          <span className="d-none d-lg-block">
            <Image className="img-fluid img-profile mx-auto mb-2" src="./img/logo.png" alt="Graham Coulby" width="150" height="150" />
          </span>
        </AnchorLink>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <NavItem key={v4()} {...item} />
            ))}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger " href="/projects">
                Projects!
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
