import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "./components/projects/ProjectCard";
import router from "./routes/Routes";



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
