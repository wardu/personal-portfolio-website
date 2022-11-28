import React from "react";
import "./portfolio.scss";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mars DAO",
    blurb:
      "An MVP frontend to Mars DAO (Decentralised Autonomous Organisation). DAOs are made possible through blockchain technology. This project is a proof-of-concept and currently uses a traditional backend for data saving and retrieval. ",
    github: "https://github.com/wardu/Mars-DAO",
    demo: "https://mars-dao-wardu.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Blackjack Game",
    blurb:
      "An implementation of the classic casino game Blackjack. This project was built using JQuery. The game is playable on desktop and mobile devices.",
    github: "https://github.com/wardu/blackjack",
    demo: "https://wardu.github.io/blackjack/",
  },
  {
    id: 3,
    image: IMG3,
    title: "In Stock Warehouse App",
    blurb:
      "Built in collaboration, this app is designed to help warehouse managers keep track of stock levels. The app is built within the MVP design framework.",
    github: "https://github.com/wardu/inStock",
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
