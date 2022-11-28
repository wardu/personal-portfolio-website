import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Trebuchet",
    blurb:
      "An implementation of the Aave flashloan feature, made for the ETHGlobal hackathon.",
    github: "https://github.com/wardu/trebuchet",
    demo: "#",
  },
  {
    id: 2,
    image: IMG2,
    title: "DeFi Calculator",
    blurb:
      "Web App that can be used to predict the future worth of a defi investment.",
    github: "https://github.com/wardu/DeFi-calc",
    demo: "#",
  },
  {
    id: 3,
    image: IMG3,
    title: "Horse Race Simulator",
    blurb:
      "The smart contracts capable of handling a horse race gambling game.",
    github: "https://github.com/wardu/horse-race-simulation",
    demo: "#",
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map(({ id, image, title, blurb, github, demo }) => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h4>{title}</h4>
              <h4>{blurb}</h4>
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
