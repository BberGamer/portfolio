import React from "react";
import "./footer.css";
import { FaInstagram, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <a href="#" className="footer_logo">
        Binh.Dev
      </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/binh_4304/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/BberGamer" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.facebook.com/bber.binh" target="_blank" rel="noreferrer">
          <FaFacebook />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2025 Binh.Dev. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
