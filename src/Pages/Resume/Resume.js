import React from "react";
import "./resume.css";

export default function Resume() {
  return (
    <div className="columns download">
      <p>
        <a href="./resume.pdf" download >
          <i>Download Resume</i>
        </a>
      </p>
    </div>
  );
}

