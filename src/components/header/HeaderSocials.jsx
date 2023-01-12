import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';

const HeaderSocials = () => {
  return (
    <div className="header___social">
      <Fade left>
        <a
          href="https://www.linkedin.com/in/mohamed-abozaid-932793143/?fbclid=IwAR1XgdsJrFc6YE_FhCnxyIQ2QLbsuGRJTYEjComMN9ZKWN94d2DqKYJ4Fj4"
          target="blank"
        >
          <AiFillLinkedin />
        </a>
      </Fade>

      <Fade left>
        <a href="https://www.facebook.com/MoAl8" target="blank">
          <BsFacebook />
        </a>
      </Fade>
    </div>
  );
};

export default HeaderSocials;
