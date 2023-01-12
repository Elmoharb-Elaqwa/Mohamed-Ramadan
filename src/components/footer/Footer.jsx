import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Slide from 'react-reveal/Slide';
import './footer.css';
const Footer = () => {
  return (
    <footer>
      <Slide left>
        <a href="#" className="footer___logo">
          Muhammad
        </a>
      </Slide>
      <Slide left>
        <ul>
          <li>
            <a href="#"> Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#experience"> Experience</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#portfolio"> Portfolio</a>
          </li>
          <li>
            <a href="#testimonials"> Testimonials</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </Slide>
      <Slide right>
        <div className="footer___socials">
          <a
            href="https://www.linkedin.com/in/mohamed-abozaid-932793143/?fbclid=IwAR1XgdsJrFc6YE_FhCnxyIQ2QLbsuGRJTYEjComMN9ZKWN94d2DqKYJ4Fj4"
            target="blank"
          >
            <AiFillLinkedin />
          </a>

          <a href="https://www.facebook.com/MoAl8" target="blank">
            <BsFacebook />
          </a>
        </div>
      </Slide>
      <Slide bottom>
        <div className="footer___copyright">
          <small>&copy; Muhammad Portfolio. All rights reserved.</small>
        </div>
      </Slide>
    </footer>
  );
};

export default Footer;
