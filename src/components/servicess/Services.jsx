import React from 'react';
import { BiCheck } from 'react-icons/bi';
import './services.css';
import Slide from 'react-reveal/Slide';
const Services = () => {
  return (
    <section id="services">
      <Slide right>
        <h5>The Experiences I Have</h5>
      </Slide>
      <Slide left>
        <h2>My Experiences</h2>
      </Slide>
      <div className="container services___container">
        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>WORK EXPERIENCE IN KSA</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Work as a planning engineer in some of projects of water
                  supply with (NWC Company) & (Khatib & Alami Consultant)
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Responsible for preparing baseline schedule and preparing
                  daily, weekly & monthly progress report
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Monitoring and controlling project work sites and preparing
                  recovery plans variation orders according to PMM
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Preparing and reviewing invoices, WIR and MIR for the projects
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Preparing GIS files And As-Built Drawings</p>
              </li>
            </ul>
          </article>
        </Slide>
        {/* End of UI/UX */}

        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>WORK EXPERIENCE IN EGYPT</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Work as a site engineer in the finishing works in activities
                  in the Egyptian Agriculture Bank, such as marble, gypsum board
                  and MEP works
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  I worked as a planning in site engineer in a project to
                  implement crude oil tanks in South Sinai, Egypt, which entered
                  the Guinness Book of Records as the largest floating surface
                  oil tank in the world.
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Work as a planning engineer in site with Petrojet Company on
                  the crude oil storage project in Ras Badran.
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Responsible for contracting with subcontractors and closing
                  deals with them
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Monitoring the execution phase of Alamein towers (working with
                  sub-contractor)
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Monitoring and tracking project progress, and writing up
                  reports
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>Responsible for ordering approval and supplying purchases</p>
              </li>
            </ul>
          </article>
        </Slide>
        {/* End Of Web Design */}
        <Slide left>
          <article className="service">
            <div className="service___head">
              <h3>Courses & Certificates</h3>
            </div>
            <ul className="service___list">
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Monitoring the execution phase of the development of axes in
                  6th October City ,supervision the quality of the different
                  concrete works, and working in the level instrument
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Working as a logistic member responsible for preparing and
                  organizing the chapter’s activities and events
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Monitoring the execution phase of multi-stories buildings of
                  “social housing”
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  Prject Management Professional (PMP) (Studying Online, Eng. /
                  Elsayed Mohsen)
                </p>
              </li>
              <li>
                <BiCheck className="service___list-icon" />
                <p>
                  {' '}
                  Advanced Project Management (Studying Online Eng. / Ahmed
                  Samir)
                </p>
              </li>
            </ul>
          </article>
        </Slide>
      </div>
    </section>
  );
};

export default Services;
