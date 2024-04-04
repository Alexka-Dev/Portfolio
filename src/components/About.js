import React from "react";
import "./styles/about.css";

export default function About() {
  return (
    <section className="about">
      <img src="/images/girl-dev.png"></img>
      <div className="title">
        <p>
          Hola! Soy Alexka,
          <span
            style={{
              fontSize: "2.5rem",
              fontWeight: "bolder",
              color: "red",
              marginLeft: "0.5rem",
            }}
          >
            Frontend Developer.
          </span>
          <br />
          <br />
          Me encanta crear experiencias web que no solo sean visualmente
          atractivas, ¡sino que también cautiven a los usuarios desde el primer
          click!
        </p>
      </div>
    </section>
  );
}
