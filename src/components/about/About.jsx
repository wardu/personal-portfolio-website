import React from 'react';
import './about.css';
import TRANS from '../../assets/transaction.jpg';
import { FiGlobe } from 'react-icons/fi';
import { FaBalanceScaleRight } from 'react-icons/fa';
import { MdOutlineLibraryBooks } from 'react-icons/md';

const About = () => {
  return (
    <section id='about'>
      <h5>My areas of</h5>
      <h2>`Interest & Expertise</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={TRANS} alt='About Me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiGlobe className='about__icon' />
              <h5>Web 3.0</h5>
              <small>
                Building the infrastructure for the distributed internet.
              </small>
            </article>

            <article className='about__card'>
              <FaBalanceScaleRight className='about__icon' />
              <h5>DeFi</h5>
              <small>
                Keeping up-to-date with the latest developments in decentralised
                finance.
              </small>
            </article>

            <article className='about__card'>
              <MdOutlineLibraryBooks className='about__icon' />
              <h5>Blockchain</h5>
              <small>
                Staying current with the latest in smart contract development.
              </small>
            </article>
          </div>
          <p>
            Blockchain Analyst and developer with a background in topography and
            physics, now focussed on leveraging the powers of DeFi using Smart
            Contracts & Web Development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
