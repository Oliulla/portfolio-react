import React from "react";
import Action from "./Action";
// import Me from "../../assets/my-img-1.jpg";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import Typewriter from "typewriter-effect";

const Header = () => {

  return (
    <header>
      <div className="container header_container">
        <h5 className="greeting">Hello, I am</h5>
        <h1 className="my_name">Mohammad Oliullah</h1>
        <Typewriter

          options={{
            strings: `MERN Stack Developer`,
            autoStart: true,
            loop: true,
            delay: 150,
            pauseFor: 100000,
            deleteSpeed: 200,
            deleteChars: 5,
          }}
        />
        <Action />

        <HeaderSocials />

        <div className="me">
          <img src="https://i.ibb.co/hmXFHww/me-portfolio.png" alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
