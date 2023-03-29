import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import profile from "../../assets/me.png";

import "./header.scss";

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
      </div>
    </header>
  );
};

export default Header;
