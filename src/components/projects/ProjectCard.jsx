import React from "react";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowInDownLeft } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  return (
    <div className="overlay_pos">
      <div className="project_card">
        <div className="project_card_body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </div>
        <img src={project.imgUrl} alt="projectImg" className="image" />
      </div>
      <div className={project.cls}>
        <div className="overlay_link">
          <a href={project.gitClient} title="see client code">
            <SiGithub />
          </a>
          <a href={project.liveDemo} title="see client code">
            <BsBoxArrowInDownLeft />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
