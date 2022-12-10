import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Home;
