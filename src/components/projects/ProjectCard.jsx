import React from "react";
import { SiGithub } from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcViewDetails } from "react-icons/fc";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="overlay_pos"
      data-aos="zoom-in"
    >
      <div className="project_card">
        <div className="project_card_body">
          <h5>{project.title}</h5>
          <p>{project.description}</p>
        </div>
        <img src={project.imgUrl} alt="projectImg" className="image" />
      </div>
      <div className={project.cls}>
        <div className="overlay_link">
          <a href={project.gitClient} title="see client code" className="icon_link">
            <SiGithub />
          </a>
          <a href={project.liveDemo} title="see live demo" className="icon_link">
            <BsBoxArrowUpRight />
          </a>
          <Link to={`/project/${project?.title}`} title="see details" className="icon_link">
            <FcViewDetails />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
