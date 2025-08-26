import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/me1.png";
import IMG2 from "../../assets/me2.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Event-Manager",
    link: "https://bbergamer.github.io/eventManager/",
    github: "https://github.com/BberGamer/eventManager",
    demo: "https://bbergamer.github.io/eventManager/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Booking Hotel",
    link: "",
    github: "",
    demo: ""
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, link, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <h5>
                <a href={link} className="btn" target="_blank">
                  {link}
                </a>
              </h5>
              <br></br>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
