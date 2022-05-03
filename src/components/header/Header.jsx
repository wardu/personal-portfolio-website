import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { BiRightArrow } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1>Warren Dubery</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>
        <a href='#contact' className='scroll__down'>
          <BiRightArrow />
        </a>
      </div>
    </header>
  );
};

export default Header;
