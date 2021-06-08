import React from "react";
import UndrawProgrammer from "../assets/wfh_1.svg";

function components() {
  return (
    <div className="card " style={{ width: "18rem" }}>
      <img src={UndrawProgrammer} alt="" />
      <div className="card-body">
        <h5 className="card-title">TECNOLOGIA EM SISTEMAS DE COMPUTAÇÃO</h5>
        <p className="caption">Uff / ufrj</p>
        <a href="/comp" className="btn btn-outline-primary btn-lg my-4">
          Acessar
        </a>
      </div>
    </div>
  );
}

export default components;
