import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-content">
                <div className="hero-text">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Alex Developer</h1>
                    <h2 className="title">Full Stack Engineer</h2>
                    <p className="description">
                        I build exceptional digital experiences that are fast, accessible, and visually stunning.
                        Turning complex problems into simple, beautiful solutions.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="circle-glow"></div>
                    {/* Using a tech-themed gradient placeholder instead of an image for now */}
                    <div className="avatar-placeholder">
                        <div className="tech-stack-float">
                            <span>React</span>
                            <span>Node</span>
                            <span>TS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
