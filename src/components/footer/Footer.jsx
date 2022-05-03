import React from 'react';
import './footer.css';
import { RiTwitterLine } from 'react-icons/ri';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Warren Dubery
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
      </ul>
      <div className='footer__socials'>
        <a href='https://twitter.com/WarrenDubery'>
          <RiTwitterLine />
        </a>
        <a href='https://github.com/wardu'>
          <AiOutlineGithub />
        </a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Warren 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
