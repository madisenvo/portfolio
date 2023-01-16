import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div>
      <div className="card justify-content-center align-items-center skills">
        <h1>Skills</h1>
        <p>
          HTML, CSS, JavaScript, React, Node.js, Express, MySQL, MongoDB,
          Sequelize, Mongoose, Handlebars, Bootstrap, jQuery, Git, GitHub
        </p>
      </div>
      <div>
        <a className="download-btn" href="/mvResume.pdf" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
