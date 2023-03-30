import { data } from "../../data/portfolio-data";

import "./portfolio.scss";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Recent Work</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, blurb, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h4 className='blurb__title'>{title}</h4>
              <h4 className='blurb'>{blurb}</h4>
              <div className='portfolio__item-cta'>
                <a
                  href={github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
