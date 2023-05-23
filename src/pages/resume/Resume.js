import React from "react";
import "./resume.scss";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
  return (
    <>
      <div>
        <div className="card justify-content-center align-items-center skills">
          <h1>Skills</h1>
          <ul>
            <li>
              AJAX
            </li>
            <li>
              Bootstrap
            </li>
            <li>
              Bulma
            </li>
            <li>
              CSS
            </li>
            <li>
              Express
            </li>
            <li>
              Git
            </li>
            <li>
              Github
            </li>
            <li>
              Handlebars
            </li>
            <li>
              HTML
            </li>
          </ul>
          <ul>
            <li>
              Javascript
            </li>
            <li>
              JQuery
            </li>
            <li>
              JSON
            </li>
            <li>
              MongoDB
            </li>
            <li>
              Mongoose
            </li>
            <li>
              MySQL
            </li>
            <li>
              Node
            </li>
            <li>
              React
            </li>
            <li>
              Sequelize
            </li>
          </ul>
          <ul>
            <li>
            Verbal and Written Communication
            </li>
            <li>
            Creative Problem Solving
            </li>
            <li>
            Management/Leadership
            </li>
            <li>
            Organization
            </li>
            <li>
            Teamwork
            </li>
            <li>
            Scrum and Agile
            Methodologies
            </li>
          </ul>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        <div>
          <a className="download-btn" href="../mvogelresume.pdf" download>
            Download Resume
          </a>
        </div>
      </div>
      <Loader type="ball-rotate" />
    </>
  );
}
