import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        {
            category: "Frontend",
            icon: "💻",
            items: ["React", "HTML5", "CSS3", "JavaScript", "TailwindCSS", "TypeScript"]
        },
        {
            category: "Backend",
            icon: "⚙️",
            items: ["Node.js", "Express", "Python", "Java", "PostgreSQL", "MongoDB", "REST APIs"]
        },
        {
            category: "Tools & DevOps",
            icon: "🛠️",
            items: ["Git", "Docker", "VS Code", "Figma", "Webpack", "AWS"]
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">
                    Technical <span>Skills</span>
                </h2>
                <div className="skills-grid">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-category glass-card">
                            <div className="category-header">
                                <span className="category-icon">{group.icon}</span>
                                <h3>{group.category}</h3>
                            </div>
                            <div className="skill-tags">
                                {group.items.map((skill, idx) => (
                                    <span key={idx} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
