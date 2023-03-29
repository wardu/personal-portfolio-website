import { useState } from "react";

// Icons
import { FiHome } from "react-icons/fi";
import { AiOutlineFolderView } from "react-icons/ai";
import { BsFillChatDotsFill } from "react-icons/bs";

// Styles
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
        <p>
          <FiHome /> Home
        </p>
      </a>

      <a
        href='#portfolio'
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <p>
          <AiOutlineFolderView /> Portfolio
        </p>
      </a>

      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <p>
          <BsFillChatDotsFill /> Contact
        </p>
      </a>
    </nav>
  );
};

export default Nav;
