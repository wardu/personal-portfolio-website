import "./about.scss";
import mars from "../../assets/mars-screenshot.png";
import { FiGlobe } from "react-icons/fi";
import { FaBalanceScaleRight } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";

const About = () => {
  return (
    <section id='about'>
      <h5>My areas of</h5>
      <h2>`Interest & Expertise</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={mars} alt='About Me' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FiGlobe className='about__icon' />
              <h5>Full Stack Development</h5>
              <small>
                I've been building websites and apps since 2017. I enjoy
                transforming ideas into reality.
              </small>
            </article>

            <article className='about__card'>
              <FaBalanceScaleRight className='about__icon' />
              <h5>Design</h5>
              <small>
                I value clean design, thoughtful UX/UI and robust architecture.
                I love to learn and am always trying to develop my craft.
              </small>
            </article>

            <article className='about__card'>
              <MdOutlineLibraryBooks className='about__icon' />
              <h5>Blockchain & Web 3.0</h5>
              <small>
                I see the value that Web 3.0 solutions offer. I'm now focussed
                on leveraging the powers of DeFi using Smart Contracts & Web
                Development.
              </small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
