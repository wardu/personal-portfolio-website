import React from 'react';
import './services.css';
import { AiOutlineCode } from 'react-icons/ai';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>Smart Contracts</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>EVM based blockchains</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>NFT contracts</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>DeFi bots</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>DAOs</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='services'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Website</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Web App</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className='services'>
          <div className='service__head'>
            <h3>Technical Writing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Blog Posts</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Developer documentation</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Technical Reports</p>
            </li>
          </ul>
        </article>
        {/* END OF DESIGN */}
      </div>
    </section>
  );
};

export default Services;
