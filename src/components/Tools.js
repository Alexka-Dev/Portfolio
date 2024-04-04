import React from "react";
import "./styles/tools.css";

export default function Tools() {
  return (
    <section className="stack">
      <h2>Mi Stack</h2>
      <div className="languages">
        <img src="/images/html.svg" alt="html"></img>
        <img src="/images/css.svg" alt="css"></img>
        <img src="/images/javascript.svg" alt="javascript"></img>
        <img src="/images/react-dark.svg" alt="react"></img>
        <img src="/images/solidity.svg" alt="solidity"></img>
        <img src="/images/nodejs-dark.svg" alt="node.js"></img>
      </div>
      <div className="tools">
        <img src="/images/hardhat-icon.svg" alt="hardhat"></img>
        <img src="/images/git.svg" alt="git"></img>
        <img src="/images/npm-dark.svg" alt="npm"></img>
        <img src="/images/eth.svg" alt="ethereum"></img>
        <img src="/images/figma-dark.svg" alt="figma"></img>
      </div>
    </section>
  );
}
