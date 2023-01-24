import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const location = useLocation();
  const pathname = location?.pathname;
  return (
    <nav>
      <Link
        to="/"
        title="Home"
        className={`${pathname === "/" ? "active_link" : ""}`}
      >
        <AiOutlineHome />
      </Link>
      <Link
        to="/projects"
        title="Projects"
        className={`${pathname === "/projects" ? "active_link" : ""}`}
      >
        <AiOutlineProject />
      </Link>
      <Link
        to="/about"
        title="About"
        className={`${pathname === "/about" ? "active_link" : ""}`}
      >
        <AiOutlineUser />
      </Link>
      <Link
        to="/my-skills"
        title="My Skills"
        className={`${pathname === "/my-skills" ? "active_link" : ""}`}
      >
        <GiSkills />
      </Link>
      <Link
        to="/contact"
        title="Contact Me"
        className={`${pathname === "/contact" ? "active_link" : ""}`}
      >
        <BiMessageAltDetail />
      </Link>
    </nav>
  );
};

export default Nav;
