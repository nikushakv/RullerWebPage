import React from 'react';
import { team } from '../data/team';

function Team({ t, language }) {
  return (
    <section className="team-section">
      <h2>{t.teamTitle}</h2>
      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.id}>
            <img src={member.photo} alt="" className="team-photo" loading="lazy" />
            <h3>{language === 'ka' ? member.nameKa : member.nameEn}</h3>
            <p className="team-role">{language === 'ka' ? member.roleKa : member.roleEn}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;