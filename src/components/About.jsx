import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a passionate software developer with a strong foundation in building scalable web applications.
                            My journey in tech started with a curiosity for how things work on the internet, which led me to dive deep into
                            frontend and backend technologies.
                        </p>
                        <p>
                            I specialize in the JavaScript ecosystem, particularly React and Node.js. I love creating intuitive user interfaces
                            and robust server-side logic. When I'm not coding, I'm exploring new technologies, contributing to open source,
                            or sharing my knowledge with the community.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">20+</span>
                                <span className="stat-label">Happy Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
