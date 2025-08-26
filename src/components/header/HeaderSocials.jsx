import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.instagram.com/binh_4304/" target="_blank">
        <FaInstagram />
      </a>
      <a href="https://github.com/BberGamer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://www.facebook.com/bber.binh"
        target="_blank"
      >
        <FaFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
