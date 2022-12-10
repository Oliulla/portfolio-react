import React, { useEffect } from "react";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./components/projects/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./components/projects/ProjectCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Header />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  // Added an animation side effect
  useEffect(() => {
    AOS.init({
      disable: <ProjectCard />,
    });
    AOS.refresh();
  }, []);

  // AOS.init();

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
