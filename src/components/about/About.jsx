import React from 'react';
import './about.css';
import me from '../../assets/mohamed11111.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Slide from 'react-reveal/Slide';
const About = () => {
  return (
    <section id="about">
      <Slide left>
        <h5>Get To Know</h5>
      </Slide>
      <Slide left>
        <h2>About Me</h2>
      </Slide>
      <div className="container about___container">
        <Slide left>
          <div className="about___me">
            <div className="about___me-image">
              <img src={me} alt="" />
            </div>
          </div>
        </Slide>
        <div className="about___content">
          <div className="about___cards">
            <Slide right>
              <article className="about___card">
                <FaAward className="about___icon" />
                <h5>Experience</h5>
                <small>4+ Years Working</small>
              </article>
            </Slide>
            <Slide right>
              <article className="about___card">
                <FiUsers className="about___icon" />
                <h5>Companies</h5>
                <small>3+ Companies</small>
              </article>
            </Slide>
            <Slide right>
              <article className="about___card">
                <VscFolderLibrary className="about___icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </Slide>
          </div>
          <Slide right>
            <p>
              Bachelor’s Degree in Civil Engineering with Grade Very Good and
              Graduation project Structural Analysis Design with Grade
              Excellent, Minya University, Egypt.
            </p>
          </Slide>
          <Slide top>
            <a href="#contact" className="btn btn-primary">
              {' '}
              Let's Talk{' '}
            </a>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default About;
