import React from "react";
import MyFace from "./MyFace.png";
import "./about.css";

export default function About() {
  return (
    <section className="container align-self-center">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <img src={MyFace} className='img-fluid' alt="my face" />
        </div>
        <div className="col-sm">
          <p>
            Hi! I'm Madisen. 
            <br/>
            I have a B.A. in French Studies from Smith College and am now learning to code at the University of Denver's Full Stack Web Development Bootcamp.
          </p>
        </div>
      </div>
    </section>
  );
}
