import React from 'react';
import CTA from './CTA';
import './header.css';
import Mohamed from '../../assets/mohamed1111.png';
import HeaderSocials from './HeaderSocials';
import Fade from 'react-reveal/Fade';
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <header>
      <div className="container header___container">
        <h5>
          <TypeAnimation
            sequence={[`Hello I'm`, 3000]}
            wrapper="div"
            cursor={false}
          />
        </h5>

        <h2>
          <TypeAnimation
            sequence={[1000, 'Mohamed Ramadan Ibrahim', 1000]}
            wrapper="div"
            cursor={false}
          />{' '}
        </h2>

        <h5 className="text-light">
          <TypeAnimation
            sequence={[2700, 'Planning Engineer', 15000]}
            wrapper="div"
            cursor={false}
          />
        </h5>

        <CTA />
        <HeaderSocials />
        <Fade bottom>
          <div className="me">
            <img src={Mohamed} alt="" />
          </div>
        </Fade>

        <a href="#contact" className="scroll___down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
