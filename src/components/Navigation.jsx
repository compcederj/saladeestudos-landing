import React from "react";
import logo from "../assets/logo.png";

export default function Navigation() {
  return (
    <nav className="bd-subnavbar py-2">
      <div className="container-xxl d-flex align-items-md-center">
        <a href="/" className="mx-2">
          <img src={logo} alt="" style={{ width: "35px" }}/>
        </a>
        <a href="developer" className="mx-2">
          Desenvolvedor
        </a>
        <a href="https://www.cecierj.edu.br/" rel="noopener noreferrer" target="_blank" className="mx-2">
          Cederj
        </a>
      </div>
    </nav>
  );
}
