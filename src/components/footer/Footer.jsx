import React from "react";
import "./footer.scss";
import { RiTwitterLine } from "react-icons/ri";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li>
          <a href='#'>⬆ Top</a>
        </li>
        <li>
          <a href='#portfolio'>⬆ Portfolio</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://twitter.com/_wardu' target='blank' rel='noreferrer'>
          <RiTwitterLine />
        </a>
        <a href='https://github.com/wardu' target='blank' rel='noreferrer'>
          <AiOutlineGithub />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Warren Dubery 2023</small>
      </div>
    </footer>
  );
};

export default Footer;
