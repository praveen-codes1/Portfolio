import React from 'react';
import bwPortrait from '../assets/prav_homebw.png';
import './Home.css';

export const MainTitle = () => (
  <section className="main-title">
    <h1 className="tech">TECH</h1>
    <h1 className="enthusiast">Enthusiast</h1>
  </section>
);

export const RestOfHome = () => (
  <>
    {/* Introduction Section */}
    <section className="introduction">
      <div className="intro-content">
        <div className="intro-text">
          <p className="hiiam">
            HI I'M PRAVEEN. <br/><br/><br/>
            </p>
            <p>Motivated and technically proficient second-year engineering student specializing in Computer Science and Data Science at New Horizon College of Engineering, with a strong academic record with current CGPA: 9.31.<br /><br />
            Skilled in Python, JavaScript, C, SQL, and web development using React and Flask.<br /><br />
            Passionate about building impactful tech solutions and leveraging data-driven insights.
          </p>
        </div>
        <div className="intro-image">
          <img src={bwPortrait} alt="Praveen Patil black and white portrait" />
        </div>
      </div>
    </section>

    {/* Collaboration Section */}
    <section className="collaboration">
      <h2 className="section-title collaborate-title">
        <span className="lets">LET'S</span>
        <span className="collaborate">Collaborate</span>
      </h2>
      <center>
           <button className="contact-button" aria-label="Contact me">
             CONTACT ME
          </button><br/>
      <div className="collab-content">
        <div className="contact-info">
          <div>
          +91 8217702864
          </div>
          <div>
           praveenpatiladithya@gmail.com
          </div>
          <a href="https://www.linkedin.com/in/praveen-patil-b99956317/">
          <button className="linked" aria-label="LinkedIn">
             in
          </button></a>
        </div>
      </div>
      </center>
    </section>
  </>
);

const Home = {
  MainTitle,
  RestOfHome,
};

export default Home;
