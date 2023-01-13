import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="../img/pic.jpg" alt="my face" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>Highly motivated full stack web developer with a web development certificate from Denver University, working towards Scrum Master Certification. Experience in project management using agile scrum methodology, clear communication, and effective collaboration. Ability to thrive in a fast-paced environment and tackle varying duties with care and efficiency.</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Madisen Vogel</span><br />
                                    <span>333-333-3333</span><br />
                                    <span>mv@mv.com</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

