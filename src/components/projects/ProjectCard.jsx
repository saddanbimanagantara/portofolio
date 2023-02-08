import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  function demo(demo) {
    if (demo === false) {
      return "";
    } else {
      return (
        <a href={props.demo}>
          <i className="ri-external-link-line"></i>
        </a>
      );
    }
  }
  return (
    <div className="project-card" data-aos="fade-up">
      <div className="project-card-image">
        <img src={props.image} key={props.image} alt="Mas Kost App" />
      </div>
      <div className="project-card-name" key={props.name}>
        {props.name}
      </div>
      <div className="project-card-discription">{props.description}</div>
      <div className="project-card-extends">
        <div className="project-card-stack">
          {props.stack.map((data) => {
            return (
              <button className="stack-button" key={data}>
                {data}
              </button>
            );
          })}
        </div>
        <div className="project-card-outlink">
          {demo(props.demo)}
          <a href={props.github}>
            <i className="ri-github-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
