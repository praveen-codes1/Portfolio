import React, { useState } from 'react';
import './about.css';

const education = [
  {
    year: '2027',
    details: [
      'BE – Computer Science and Engineering (Data Science)',
      'New Horizon College of Engineering',
      '9.31 CGPA, Club Member, Innovation Club; Organiser, MovieCon Fest; Core Coordinator; Drama Club',
    ],
    link: 'https://newhorizoncollegeofengineering.in/'
  },
  {
    year: '2023',
    details: [
      'II PU, Kumadvathi Science and Commerce Pre-University',
      '97% score in PCMB with 100% in Mathematics, 97 percentile in JEE Main',
    ],
    link: 'https://www.svvsedu.in/kscpuc/'
  },
  {
    year: '2021',
    details: [
      'CBSE X, Kumadvathi Residential Central School',
      '93.4% in Class X, 4-time NIF India Inspire Award shortlisted innovator; State Level Inspire Award Finalist, presented at CBSE Regional Level Science and Tech Expo, actively involved in Anchoring and Public Speaking',
    ],
    link: 'https://kumadvathicentralschool.org/'
  },
];

const certifications = [
  {
    title: 'Front End Developer (React), HackerRank',
    image: require('../assets/react_certf.png'),
  }
];

const participation = [
  'DataQuest, UVCE',
  'Quantum Hacks, NHCE',
  'Technotsav, CIT',
  'Code-A-Thon',
];

const leadership = [
  'Youngest Sports Captain and House Vice-Captain in school at age 13 and 14.',
  'Club Member, Innovation Club – leading a team of 100+ members, organizing performances and competitions.',
  'Board Member and Coordinator, Drama Club – leading a team of 100+ members, organizing performances and competitions.',
  'Organizing Team, MovieCon – managed logistics, coordination, and event execution with large student participation.',
  'I thrive in roles that demand initiative, vision, and the ability to energize teams toward a shared goal.',
  'I am a quick learner and a team player, I am always looking for new challenges and opportunities to grow.',
];

const About = () => {
  const [hoveredCert, setHoveredCert] = useState(null);

  return (
    <div className="about-bg">
      {/* HEADER: You can import your Header component here if not already global */}
      {/* <Header /> */}
      <div id="sprk">
        <div className="background-image"></div>
        <div className="about-title">ABOUT</div>
      </div>
      <div id="restab">
        {/* Education */}
        <div className="about-section-label" id="ed">EDUCATION</div>
        <div className="about-education-list">
          {education.map((item, idx) => (
            <a 
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="about-edu-link"
              key={idx}
            >
              <div className="about-edu-card">
                <div className="about-edu-year">{item.year}</div>
                <div className="about-edu-details">
                  {item.details.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Updated Certifications section */}
        <div className="about-section-label" id="cer">Certifications</div>
        <div className="about-cert-list">
          {certifications.map((cert, idx) => (
            <div 
              key={idx} 
              className="cert-container"
              onMouseEnter={() => setHoveredCert(idx)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              <div className="about-cert-card">
                {cert.title}
              </div>
              {hoveredCert === idx && (
                <div className="cert-popup">
                  <div className="cert-popup-content">
                    <h3>{cert.title}</h3>
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* External Participation */}
        <div className="about-section-label">EXTERNAL PARTICIPATION</div>
        <div className="about-participation-list">
          {participation.map((item, idx) => (
            <div className="about-participation-card" key={idx}>{item}</div>
          ))}
        </div>

        {/* Beyond Code section with golden box */}
        <div className="beyond-container">
          <div className="about-beyond-title">
            BEYOND CODE: LEADERSHIP AND INITIATIVE
          </div>
          <ul className="about-beyond-list">
            {leadership.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default About;
