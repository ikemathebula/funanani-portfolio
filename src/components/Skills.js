import React from 'react';
import './Skills.css';

function Skills() {
  const bars = [
    { name: 'Public Speaking', level: 95 },
    { name: 'Leadership', level: 90 },
    { name: 'Multilingual (8 languages)', level: 100 },
    { name: 'Modeling & Poise', level: 85 },
    { name: 'Youth Advocacy', level: 90 },
  ];

  return (
    <section>
      <h2>Skills</h2>

      <ul>
        <li>Fluent in 8 languages</li>
        <li>Excellent verbal and written communication</li>
        <li>Team collaboration and leadership</li>
      </ul>

      <div className="skills-container">
        {bars.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="bar-background">
              <div
                className="bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
