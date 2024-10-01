import React from "react";
import webpackLogo from "../images/webpack.png";

export default function App() {
  return (
    <>
      <div className="item" >Welcome to React app!</div>
      <img className="item" src={webpackLogo} alt="Webpack logo" />
    </>
  );
}