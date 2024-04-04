import React from "react";
import "./styles/projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2> Mis proyectos.</h2>
      <div className="cards-container">
        <div className="card">
          <img src="/images/BytePeak.png" alt="Descripción de la imagen"></img>
          <div className="card__content">
            <p className="card__title">Byte Peak Technologies.</p>
            <p className="card__description">
              <a href="https://bytepeaktechnology.com/">Visitar el sitio!</a>
            </p>
          </div>
        </div>
        <div className="card">
          <img src="/images/Spartans.jpg" alt="Descripción de la imagen"></img>
          <div className="card__content">
            <p className="card__title">Spartans Sport Academy</p>
            <p className="card__description">
              <a href="https://spartansacedemyvenezuela.com/">
                Visitar el sitio!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
