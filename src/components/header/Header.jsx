import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { BiRightArrow } from "react-icons/bi";

import "./header.scss";
import profile from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h1>Warren Dubery</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={profile} alt='profile of Warren Dubery' />
        </div>
        <a href='#contact' className='scroll__down'>
          <BiRightArrow />
        </a>
      </div>
    </header>
  );
};

export default Header;
