import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Dashboard",
            description: "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
            tags: ["React", "Redux", "Chart.js", "Firebase"],
            link: "#",
            repo: "#"
        },
        {
            title: "Social Media App",
            description: "A full-featured social platform with real-time messaging, post interactions, and user profiles.",
            tags: ["MERN Stack", "Socket.io", "AWS"],
            link: "#",
            repo: "#"
        },
        {
            title: "Task Management Tool",
            description: "Collaborative project management tool with drag-and-drop kanban boards and team chat.",
            tags: ["Vue.js", "Vuex", "Node.js", "MongoDB"],
            link: "#",
            repo: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx}>{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.link} className="btn-link">View Demo</a>
                                    <a href={project.repo} className="btn-link secondary">GitHub</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
