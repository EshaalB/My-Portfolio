import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, description, source, demo }) => {
  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt={projectName} />
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div>
          <a href={source} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="projectbtn">
              <CgFileDocument /> Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
