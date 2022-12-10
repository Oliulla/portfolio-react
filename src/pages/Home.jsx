import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
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
