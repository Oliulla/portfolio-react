import { createBrowserRouter } from "react-router-dom";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import MySkills from "../components/mySkills/MySkills";
import ProjectDetails from "../components/projects/ProjectDetails";
import Projects from "../components/projects/Projects";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";

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
        loader: ({ params }) =>
          fetch(
            `https://portfolio-server-one.vercel.app/project/${params?.title}`
          ),
        element: <ProjectDetails />,
      },
    ],
  },
]);

export default router;
