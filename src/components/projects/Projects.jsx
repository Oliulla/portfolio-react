import React from "react";
import "./Projects.css";
import projImg1 from "../../assets/projImg1.png";
import projImg2 from "../../assets/projImg2.png";
import projImg3 from "../../assets/projImg3.png";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Astrophotography",
    description: "Firebase Auth & MERN Project",
    imgUrl: projImg1,
    cls: "overlay",
    gitClient: "https://github.com/Oliulla/astrophotography-client",
    gitServ: "https://github.com/Oliulla/astrophotography-server",
    liveDemo: "https://astrophotography-2b4fc.web.app/",
  },
  {
    title: "Alibris",
    description: "Firebase Auth & MERN Project",
    imgUrl: projImg2,
    cls: "overlay",
    gitClient: "https://github.com/Oliulla/alibris-client",
    gitServ: "https://github.com/Oliulla/alibris-server",
    liveDemo: "https://alibris-fc03d.web.app/",
  },
  {
    title: "Bright Zone",
    description: "Firebase Auth & React Routing",
    imgUrl: projImg3,
    cls: "overlay",
    gitClient: "https://github.com/Oliulla/bright-zone-client",
    gitServ: "https://github.com/Oliulla/bright-zone-server",
    liveDemo: "https://bright-zone.web.app/",
  },
];

const Projects = () => {
  return (
    <section>
      <h2>My Projects</h2>
      <div className="container">
      <h3 className="p_left_bottom">MERN Stack Projects</h3>
        <div className="projects_card_container">
          {projects.map((project, idx) => {
            return <ProjectCard key={idx} project={project} />
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
