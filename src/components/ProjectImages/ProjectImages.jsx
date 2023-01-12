import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/image1.png';
import IMG2 from '../../assets/image2.png';
import IMG3 from '../../assets/image3.png';
import IMG4 from '../../assets/image4.png';
import IMG5 from '../../assets/image5.png';
import IMG6 from '../../assets/image6.png';
import IMG7 from '../../assets/image7.png';
import IMG8 from '../../assets/image8.png';
import IMG9 from '../../assets/image9.png';
import Slide from 'react-reveal/Slide';
const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Professional Planning Engineer Workshop',
      // github: 'https://github.com/Elmoharb-Elaqwa/menu-project',
      // site: 'https://elmoharb-elaqwa.github.io/menu-project/',
    },
    {
      id: 2,
      image: IMG2,
      title: 'Certificate Of Attendance',
      // github: 'https://github.com/Elmoharb-Elaqwa/todo-list',
      // site: 'https://abdulrahmantodolist.netlify.app/',
    },
    {
      id: 3,
      image: IMG3,
      title: 'Certificate Of Completion',
      // github: 'https://github.com/Elmoharb-Elaqwa/trainning',
      // site: 'https://elmoharb-elaqwa.github.io/trainning/',
    },
    {
      id: 4,
      image: IMG4,
      title: 'MS-Word For Professionals',
      // github: 'https://github.com/Elmoharb-Elaqwa',
      // site: 'https://nimble-kulfi-a3db0d.netlify.app/',
    },
    {
      id: 5,
      image: IMG5,
      title: 'USSanDiego',
      // github: 'https://github.com/Elmoharb-Elaqwa/notefrontend',
      // site: 'https://elmoharb-elaqwa.github.io/notefrontend/',
    },
    {
      id: 6,
      image: IMG6,
      title: 'Construction Project Mangement',
      // github: 'https://github.com/Elmoharb-Elaqwa/JavaScript-Template',
      // site: 'https://elmoharb-elaqwa.github.io/JavaScript-Template/',
    },
    {
      id: 6,
      image: IMG7,
      title: 'Construction Project Mangement',
      // github: 'https://github.com/Elmoharb-Elaqwa/JavaScript-Template',
      // site: 'https://elmoharb-elaqwa.github.io/JavaScript-Template/',
    },
    {
      id: 6,
      image: IMG8,
      title: 'Construction Project Mangement',
      // github: 'https://github.com/Elmoharb-Elaqwa/JavaScript-Template',
      // site: 'https://elmoharb-elaqwa.github.io/JavaScript-Template/',
    },
    {
      id: 6,
      image: IMG9,
      title: 'Construction Project Mangement',
      // github: 'https://github.com/Elmoharb-Elaqwa/JavaScript-Template',
      // site: 'https://elmoharb-elaqwa.github.io/JavaScript-Template/',
    },
  ];
  return (
    <section id="portfolio">
      <Slide left>
        <h5>My Recent Work</h5>
      </Slide>
      <Slide right>
        <h2>Project Images</h2>
      </Slide>
      <div className="container portfolio___container">
        {data.map((data) => {
          return (
            <Slide left key={data.id}>
              <article className="portfolio___item" key={data.id}>
                <div className="portfolio___item-image">
                  <img src={data.image} alt="" />
                </div>
                {/* <h3>{data.title}</h3> */}
                {/* <div className="portfolio___item-cta">
                  <a target="blank" href={data.github} className="btn">
                    Github
                  </a>
                  <a
                    target="blank"
                    href={data.site}
                    className="btn btn-primary"
                  >
                    Site
                  </a>
                </div> */}
              </article>
            </Slide>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
