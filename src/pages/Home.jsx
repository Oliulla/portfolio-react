import React from "react";
import { Outlet } from "react-router-dom";
// import SnowfallAnimation from "../components/Animations/SnowfallAnimation/SnowfallAnimation";
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
      {/* <SnowfallAnimation /> */}
    </>
  );
};

export default Home;
