import React from 'react';
import './Timeline.css';

function Timeline() {
  const events = [
    {
      year: "2018 – 2021",
      title: "Ikusasalethu Primary School",
      description: "Excelled in academics and started public speaking at school functions."
    },
    {
      year: "2022 – Present",
      title: "Kgatelopele Secondary School",
      description: "Current Grade 11 student. Represented school in youth debates and language competitions."
    },
    {
      year: "2023",
      title: "Miss Unspoken SA Semi-Finalist",
      description: "Recognized for advocacy work and poise in the semi-finals."
    },
    {
      year: "2024",
      title: "Youth Advocate – Dorah’s Ark",
      description: "Coordinates sponsorships for orphans and disadvantaged youth."
    }
  ];

  return (
    <section>
      <h2>Timeline</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{event.year}</h3>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
