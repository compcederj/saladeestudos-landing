import React from "react";
import UndrawProgrammer from "../assets/undraw_programmer_imem.png";

function components() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={UndrawProgrammer} alt="" />
      <div className="card-body">
        <h5 className="card-title">TECNOLOGIA EM SISTEMAS DE COMPUTAÇÃO</h5>
        <a href="/comp" className="btn btn-primary my-4">
          Acessar
        </a>
      </div>
    </div>
  );
}

export default components;
