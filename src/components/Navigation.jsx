import React from "react";

export default function Navigation() {
  return (
    <nav className="bd-subnavbar py-2">
      <div className="container-xxl d-flex align-items-md-center">
        <a href="developer" className="mx-2">
          Desenvolvedor
        </a>
        <a href="/get-involved" className="mx-2">
          Colabore
        </a>
        <a href="https://www.cecierj.edu.br/" target="_blank" className="mx-2">
          Cederj
        </a>
      </div>
    </nav>
  );
}
