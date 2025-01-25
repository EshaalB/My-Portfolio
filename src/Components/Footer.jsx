import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si"; // Import LeetCode icon

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://github.com/EshaalB" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/u/eshaalrehamat"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode /> {/* Updated to use react-icons */}
        </a>
        <a href="https://instagram.com/eshaaldev" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/eshaaldev"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailTo:work.eshaalrehamat@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
