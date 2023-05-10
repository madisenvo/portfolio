import React from "react";
import MyFace from "./MyFace.png";
import "./about.css";

export default function About() {
  return (
    <section className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm">
          <img src={MyFace} className="img-fluid" alt="my face" />
        </div>
        <div className="col-sm about">
          <p>
            <br />
            <br />
            Hi, I'm Madisen.
            <br />
            <br />
            I have a B.A. in French Studies from Smith College and a certificate
            in Full Stack Web Development from the University of Denver.
            <br />
            <br />
            I'm a passionate advocate for women in technology, working to make
            tech more inclusive and equitable.
          </p>
        </div>
      </div>
    </section>
  );
}
