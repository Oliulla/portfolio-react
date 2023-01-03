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
          <h3>{project.title}</h3>
          <div className="badge_container">
            {
              project?.technologies?.map((tech, idx) =><span key={idx} className="badge">{tech}</span>)
            }
          </div>

        </div>
        <img src={project.imgUrl} alt="projectImg" className="image" />
      </div>
      <div className="overlay">
        <div className="overlay_link">
          <a href={project.gitClient} className="icon_link" target="_blank" rel="noreferrer">
            <SiGithub title="See client code" />
          </a>
          <a href={project.gitServ} className="icon_link" target="_blank" rel="noreferrer">
            <SiGithub title="See server code" />
          </a>
          <a href={project.liveDemo} title="See live demo" className="icon_link" target="_blank" rel="noreferrer">
            <BsBoxArrowUpRight />
          </a>
          <Link to={`/project/${project?.title}`} title="See details" className="icon_link">
            <FcViewDetails />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
