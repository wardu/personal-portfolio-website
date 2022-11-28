import "./experience.scss";
import { BsCheckCircle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My experience:</h5>
      <h2>The Technologies</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>HTML5</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>SCSS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Mobile First</h4>
              </div>
            </article>
          </div>
        </div>

        <div className='experience__backend'>
          <h3>Backend Development</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Solidity</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
