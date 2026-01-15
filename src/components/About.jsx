import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About <span>Me</span></h2>
                <div className="about-content">
                    <div className="about-text glass-card">
                        <p className="lead-text">
                            I am a passionate software developer with a strong foundation in building scalable web applications.
                            My journey in tech started with a curiosity for how things work on the internet.
                        </p>
                        <p>
                            I specialize in the JavaScript ecosystem, particularly React and Node.js. I love creating intuitive user interfaces
                            and robust server-side logic. When I'm not coding, I'm exploring new technologies or contributing to open source.
                        </p>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item glass-card">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Exp</span>
                        </div>
                        <div className="stat-item glass-card">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects</span>
                        </div>
                        <div className="stat-item glass-card">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
