import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: "Frontend", items: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind", "TypeScript"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"] },
        { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma", "Webpack"] }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((group, index) => (
                        <div key={index} className="skill-category">
                            <h3>{group.category}</h3>
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
