import "./experience.scss";
import { BsCheckCircle } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
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
                <h4>Sass</h4>
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
                <h4>React.js</h4>
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
                <h4>Node.js</h4>
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
                <h4>MongoDB</h4>
              </div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Writing</h3>

          <div className='experience__content'>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Developer documentation</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Technical reports</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircle className='experience__details-icon' />
              <div>
                <h4>Blog posts</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
