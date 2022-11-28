import "./services.scss";
import { AiOutlineCode } from "react-icons/ai";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='services'>
          <div className='service__head'>
            <h3>Back end engineering</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Building scalable APIs</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>NFT contracts</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>DeFi bots</p>
            </li>
          </ul>
        </article>

        <article className='services'>
          <div className='service__head'>
            <h3>Front end web development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Website design and build from scratch</p>
            </li>
            <li>
              <AiOutlineCode className='service__list-icon' />
              <p>Dynamic Web Apps</p>
            </li>
          </ul>
        </article>

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
      </div>
    </section>
  );
};

export default Services;
