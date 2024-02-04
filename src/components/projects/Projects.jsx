import "./Projects.css";
import ProjectCard from "./ProjectCard";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Loader/Loading";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  // const url = process.env.REACT_APP_ROOT_API_URL;

  useEffect(() => {
    setIsLoading(true);

    async function getProjects() {
      const res = await axios.get(
        `${process.env.REACT_APP_ROOT_API_URL}/projects`
      );
      const data = res.data?.data;
      if (data?.length > 0) {
        setProjects(data);
      }
    }

    getProjects()
      .catch((error) => console.log("Error:", error))
      .finally(() => setIsLoading(false));
  }, []);

  // const {
  //   data: projects = [],
  //   isLoading,
  //   error,
  // } = useQuery({
  //   queryKey: ["projects"],
  //   queryFn: async () => {
  //     try {
  //       await axios
  //         .get("http://localhost:5000/projects")
  //         .then((data) => {
  //           // console.log("projects data",data.data.data);
  //           return data.data.data;
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  // });

  // if (error) {
  //   console.log(error);
  // }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <h2 className="btn_heading">My Projects</h2>
          <div className="container">
            <h3 className="p_left_bottom">MERN Stack Projects</h3>
            <div className="projects_card_container">
              {projects.map((project, idx) => {
                return <ProjectCard key={idx} project={project} />;
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
