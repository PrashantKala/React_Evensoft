import React from 'react';
// import './ExecutiveTeam.css';

const ExecutiveTeam = ({ teamMembers }) => {
  return (
    <div className="executive-team-container">
      <h2 className="executive-team-title">Executive Team</h2>
      <div className="executive-team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="executive-card">
            <img src={member.photoUrl} alt={`${member.name}'s photo`} className="executive-photo" />
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
