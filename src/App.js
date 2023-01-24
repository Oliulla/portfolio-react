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
import ProjectDetails from "./components/projects/ProjectDetails";
import ErrorPage from "./pages/ErrorPage";
import MySkills from "./components/mySkills/MySkills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
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
        path: "/my-skills",
        element: <MySkills />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project/:title",
        loader: ({params}) => fetch(`https://portfolio-server-one.vercel.app/project/${params?.title}`),
        element: <ProjectDetails />,
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
