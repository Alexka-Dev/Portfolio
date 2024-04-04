import React from "react";
import "./styles/header.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <div>
          <img
            className="header-logo"
            src="/images/LogoA4.png"
            alt="logo"
          ></img>
        </div>
        <div className="nav-button-conteiner">
          <nav className="navbar">
            <ul>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </nav>
          <div className="cta">
            <a href="mailto:alexk.dev89@gmail.com">
              <button className="button">Hablemos!</button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
