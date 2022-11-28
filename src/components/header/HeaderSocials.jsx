import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiMediumLine } from "react-icons/ri";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a
        href='https://www.linkedin.com/in/wardu//'
        target='_blank'
        rel='noreferrer'
      >
        <BsLinkedin />
      </a>
      <a href='https://github.com/wardu' target='_blank' rel='noreferrer'>
        <BsGithub />
      </a>
      <a href='https://twitter.com/_wardu' target='_blank' rel='noreferrer'>
        <FiTwitter />
      </a>
      <a
        href='https://medium.com/@WarrenDubery_97922'
        target='_blank'
        rel='noreferrer'
      >
        <RiMediumLine />
      </a>
    </div>
  );
};

export default HeaderSocials;
