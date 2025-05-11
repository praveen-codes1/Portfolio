import React from 'react';
import './about.css';

const education = [
  {
    year: '2027',
    details: [
      'BE – Computer Science and Engineering (Data Science)',
      'New Horizon College of Engineering',
      '9.31 CGPA, Club Member, Innovation Club; Organiser, MovieCon Fest; Core Coordinator; Drama Club',
    ],
  },
  {
    year: '2023',
    details: [
      'II PU, Kumadvathi Science and Commerce Pre-University',
      '97% score in PCMB with 100% in Mathematics, 97 percentile in JEE Main',
    ],
  },
  {
    year: '2021',
    details: [
      'CBSE X, Kumadvathi Residential Central School',
      '93.4% in Class X, 4-time NIF India Inspire Award shortlisted innovator; State Level Inspire Award Finalist, presented at CBSE Regional Level Science and Tech Expo, actively involved in Anchoring and Public Speaking',
    ],
  },
];

const certifications = [
  'Front End Developer (React), HackerRank',
];

const participation = [
  'DataQuest, UVCE',
  'Quantum Hacks, NHCE',
  'DataQuest, UVCE',
  'Quantum Hacks, NHCE',
];

const leadership = [
  'Youngest Sports Captain and House Vice-Captain in school at age 13 and 14.',
  'Core Board Member, Drama Club – leading a team of 100+ members, organizing performances and competitions.',
  'Head Organizer, MovieCon – managed logistics, coordination, and event execution with large student participation.',
  'I thrive in roles that demand initiative, vision, and the ability to energize teams toward a shared goal.',
];

const About = () => (
  <div className="about-bg">
    {/* HEADER: You can import your Header component here if not already global */}
    {/* <Header /> */}
    <div id="sprk">
    {/* Main Title */}
    <div className="about-title">ABOUT</div>
    </div>
    <div id="restab">
    {/* Education */}
    <div className="about-section-label" id="ed">EDUCATION</div>
    <div className="about-education-list">
      {education.map((item, idx) => (
        <div className="about-edu-card" key={idx}>
          <div className="about-edu-year">{item.year}</div>
          <div className="about-edu-details">
            {item.details.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
    {/* Certifications */}
    
    <div className="about-section-label" id="cer">Certifications</div>
    <div className="about-cert-list">
      {certifications.map((cert, idx) => (
        <div className="about-cert-card" key={idx}>{cert}</div>
      ))}
    </div>

    {/* External Participation */}
    <div className="about-section-label">EXTERNAL PARTICIPATION</div>
    <div className="about-participation-list">
      {participation.map((item, idx) => (
        <div className="about-participation-card" key={idx}>{item}</div>
      ))}
    </div>

    {/* Beyond Code */}
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
);

export default About;
