import "./Projects.css";
import ProjectCard from "./ProjectCard";
// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://portfolio-server-one.vercel.app/projects")
      .then((data) => {
        // console.log(data.data.data);
        setProjects(data?.data?.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
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
        <div className="loading_container">
          <p className="text_center">Loading, please wait...</p>
        </div>
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
