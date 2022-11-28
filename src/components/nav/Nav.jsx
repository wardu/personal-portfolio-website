import { FiHome } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineFolderView } from "react-icons/ai";
import { IoHammerOutline } from "react-icons/io5";
import { BsFillChatDotsFill } from "react-icons/bs";
import { useState } from "react";

import "./nav.scss";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <FiHome />
      </a>
      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <CgProfile />
      </a>
      <a
        href='#portfolio'
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <AiOutlineFolderView />
      </a>
      <a
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <IoHammerOutline />
      </a>
      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BsFillChatDotsFill />
      </a>
    </nav>
  );
};

export default Nav;
