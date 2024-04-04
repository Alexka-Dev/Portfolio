import React from "react";
import "./styles/button.css";

const Button = ({ children, onClick, ancho }) => {
  return (
    <button className="button" style={{ width: ancho }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
