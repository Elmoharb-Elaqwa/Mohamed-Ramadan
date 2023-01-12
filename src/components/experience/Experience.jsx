import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <section id="experience">
      <Fade left>
        <h5>The Skills I Have</h5>
      </Fade>
      <Fade left>
        <h2>My Skills</h2>
      </Fade>
      <div className="container experience___container">
        <Fade top>
          <div className="experience___frontend">
            <h3>Soft Skills</h3>
            <div className="experience___content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Time management </h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Leadership</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Creativity</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4> Communication</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Teamwork</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Problem-solving</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </Fade>

        {/* End of frontend development */}

        <Fade top>
          <div className="experience___backend">
            <h3>Computer Skills</h3>
            <div className="experience___content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>AutoCAD</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>MS Office</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Primavera P6</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>MS-Power BI</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>Freelancer</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article>{' '}
              {/* <article className="experience__details">
                <BsPatchCheckFill className="experience___icon" />
                <div>
                  <h4>MONGO DB</h4>
                  <small className="text-align">Experienced</small>
                </div>
              </article> */}
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Experience;
