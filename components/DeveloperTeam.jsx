import React from 'react';
// import './ExecutiveTeam.css';

const ExecutiveTeam = ({ developerTeam }) => {
  return (
    <div className="executive-team-container">
      <h2 className="executive-team-title">Developer Team</h2>
      <div className="executive-team-grid">
        {developerTeam.map((member, index) => (
          <div key={index} className="executive-card">
            <div className="executive-info">
              <h3 className="executive-name">{member.name}</h3>
              <p className="executive-title">{member.title}</p>
              <ul>
              {member.decriptions.map((description, idx) => (
                <li key={idx} className="executive-description">{description}</li>
              ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutiveTeam;
