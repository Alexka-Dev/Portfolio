import React from "react";
import "./styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact" style={{ paddingBottom: "1rem" }}>
        <p style={{ fontSize: "1rem", color: "white" }}>
          Si quieres saber mas de mi
          <span
            style={{
              fontSize: "2rem",
              color: "#ff0000",
              marginLeft: "1rem",
              fontWeight: "bold",
            }}
          >
            Contactame!
          </span>
        </p>
      </div>
      <div className="conteiner">
        <div className="social-media">
          <button className="footer-button">
            <a href="https://www.instagram.com/alexkdev/?hl=es-es">
              <img
                src="/images/instagram-foot.svg"
                alt="Descripción de la imagen"
              ></img>
              Instagram
            </a>
          </button>
          <button className="footer-button">
            <a href="https://twitter.com/Alexka09">
              <img
                src="/images/twitter-foot.svg"
                alt="Descripción de la imagen"
              ></img>
              Twitter
            </a>
          </button>
          <button className="footer-button">
            <a href="https://github.com/Alexka-Dev">
              <img
                src="/images/github-foot.svg"
                alt="Descripción de la imagen"
              ></img>
              Github
            </a>
          </button>
          <button className="footer-button">
            <a href="https://www.linkedin.com/in/alexka-l-18a1a4218/">
              <img
                src="/images/linkedin-foot.svg"
                alt="Descripción de la imagen"
              ></img>
              Linkedin
            </a>
          </button>
          <button className="footer-button">
            <a href="mailto:alexk.dev89@gmail.com">
              <img
                src="/images/email-foot.svg"
                alt="Descripción de la imagen"
              />
              Email
            </a>
          </button>
        </div>
      </div>
      <div className="logo-copy">
        <p>
          Build with 💜 by AlexkDev | © Copyritght 2023. | All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
