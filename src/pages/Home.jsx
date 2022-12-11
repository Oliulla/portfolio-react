import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const Home = () => {

  // useEffect(() => {
  //   fetch(`details.json`)
  //   .then(res => res.json())
  //   .then(data => {
  //       console.log(data)
  //   })

// }, [])

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Home;
