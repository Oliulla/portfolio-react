import React from "react";
import Action from "./Action";
import Me from "../../assets/my-img-1.jpg";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";
import Typewriter from "typewriter-effect";

const Header = () => {

  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I am</h5>
        <Typewriter

          options={{
            strings: "Mohammad Oliullah",
            autoStart: true,
            loop: true,
            delay: 150,
            pauseFor: 100000,
            deleteSpeed: 200,
            deleteChars: 5,
          }}
        />
        {/* <h1>Oliullah</h1> */}
        <h5 className="text-light">MERN Stack Developer</h5>
        <Action />

        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
