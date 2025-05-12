import React from 'react';
import { motion } from 'framer-motion';
import bwPortrait from '../assets/prav_homebw.png';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as VinylDisc } from '../assets/vinyl-disc.svg';
import './Home.css';

export const MainTitle = () => (
  <motion.section 
    className="main-title"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="title-3d-container">
      <motion.h1 
        className="tech"
        initial={{ 
          rotateX: -90,
          opacity: 0
        }}
        animate={{ 
          rotateX: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 100,
          delay: 0.3
        }}
      >
        <span className="tech-letter" style={{ '--delay': '0' }}>T</span>
        <span className="tech-letter" style={{ '--delay': '0.1' }}>E</span>
        <span className="tech-letter" style={{ '--delay': '0.2' }}>C</span>
        <span className="tech-letter" style={{ '--delay': '0.3' }}>H</span>
      </motion.h1>

      <motion.h1 
        className="enthusiast"
        initial={{ 
          scale: 1.5,
          rotateY: 90,
          opacity: 0
        }}
        animate={{ 
          scale: 1,
          rotateY: 0,
          opacity: 1
        }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 80,
          delay: 1
        }}
        whileHover={{
          rotateY: [-10, 10],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }
        }}
      >
        Enthusiast
      </motion.h1>
    </div>
  </motion.section>
);

export const RestOfHome = () => (
  <>
    {/* Introduction Section */}
    <motion.section 
      className="introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <div className="intro-content">
        <motion.div 
          className="intro-text"
          initial={{ x: -50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.p 
            className="hiiam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <span id="hi">HI I'M PRAVEEN.</span> <br/><br/><br/>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            Motivated and technically proficient second-year engineering student specializing in Computer Science and Data Science at New Horizon College of Engineering, with a strong academic record with current CGPA: 9.31.<br /><br />
            Skilled in Python, JavaScript, C, SQL, and web development using React and Flask.<br /><br />
            Passionate about building impactful tech solutions and leveraging data-driven insights.
          </motion.p>
        </motion.div>
        <motion.div 
          className="intro-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.img 
            src={bwPortrait} 
            alt="Praveen Patil black and white portrait"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>

    {/* Collaboration Section */}
    <motion.section 
      className="collaboration"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.4 }}
    >
      <div className="vinyl-container">
        <motion.div 
          className="vinyl-disc"
          animate={{ 
            rotate: 360 
          }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <VinylDisc />
        </motion.div>

        <div className="contact-content">
          <motion.h2 
            className="section-title collaborate-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <motion.span 
              className="lets"
              whileHover={{ scale: 1.1 }}
            >
              LET'S
            </motion.span>
            <motion.span 
              className="collaborate"
              whileHover={{ scale: 1.1 }}
            >
              Collaborate
            </motion.span>
          </motion.h2>

          <div className="contact-buttons">
            <motion.a 
              href="https://wa.me/918217702864"
              className="contact-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button className="contact-button">
                WhatsApp
              </motion.button>
            </motion.a>

            <motion.a 
              href="mailto:praveenpatiladithya@gmail.com"
              className="contact-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button className="contact-button">
                Email
              </motion.button>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/praveen-patil-b99956317/"
              className="contact-item"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button className="linked">
                <LinkedInIcon className="linkedin-icon" />
              </motion.button>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  </>
);

const Home = {
  MainTitle,
  RestOfHome,
};

export default Home;
