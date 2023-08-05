import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaRegFilePdf } from "react-icons/fa";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="//www.github.com/AwesomeDin/PDFRes/blob/main/RithvikDineshResume.pdf"
        className="home__social-icon"
        target="_blank"
      >
        <FaRegFilePdf />
      </a>
      <a
        href="https://www.github.com/awesomedin"
        className="home__social-icon"
        target="_blank"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rithvikdinesh/"
        className="home__social-icon"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Social;
