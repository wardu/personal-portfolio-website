import React from "react";
import "./footer.scss";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaMediumM } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer__socials'>
        <a
          href='https://medium.com/@WarrenDubery_97922'
          target='blank'
          rel='noreferrer'
        >
          <FaMediumM />
        </a>
        <a
          href='https://www.linkedin.com/in/wardu/'
          target='blank'
          rel='noreferrer'
        >
          <BsLinkedin />
        </a>
        <a href='https://twitter.com/_wardu' target='blank' rel='noreferrer'>
          <FiTwitter />
        </a>
        <a href='https://github.com/wardu' target='blank' rel='noreferrer'>
          <FaGithubAlt />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Warren Dubery 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
