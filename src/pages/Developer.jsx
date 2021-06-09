import React from "react";
import Navigation from "../components/Navigation";
import DeveloperCard from "../components/DeveloperCard";
import FrontImage from "../assets/wfh_1.svg";
import BackImage from "../assets/wfh_7.svg";
import repositoryImage from "../assets/clip-1712.png";

export default function Developer() {
  return (
    <>
      <Navigation></Navigation>
      <div className="px-4 py-5 my-5 text-center p-3 mb-5 container">
        <h1 className="display-5 fw-bold">Área do desenvolvedor</h1>
        <p className="my-5">
          Ajude-nos a desenvolver mais ferramentas que auxiliem no dia a dia dos
          estudantes.
        </p>
        <div className="row">
          <div className="col">
            <DeveloperCard
              image={FrontImage}
              title="Frontend"
              description="Junte-se a outros desenvolvedores front end para aprimorar a aplicação utilizando o framework que quiser e integrando com nossos microfrontends"
              link="#frontend"
              textLink="Saiba mais"
            />
          </div>
          <div className="col">
            <DeveloperCard
              image={BackImage}
              title="Backend"
              description="Contrinua com nossa api, desenvolva microserviços ou crawlers que possam ajudar a nossa plataforma a ser cada vez mais útil a todos nós."
              link="#backend"
              textLink="Saiba mais"
            />
          </div>
          <div className="col">
            <DeveloperCard
              image={repositoryImage}
              title="Repositórios"
              description={`Todos os repositórios estão nesta organização "compcederj", caso
              tenha algum novo projeto que queira adicionar entre em contato com
              algum dos responsáveis para que seu projeto seja incluído e faça
              parte do ecossistema.`}
              link="https://github.com/compcederj"
              textLink="ir ao github"
            />
          </div>
        </div>
      </div>
      <div
        className="px-4 py-5 my-5 text-center p-3 mb-5 container"
        id="frontend"
      >
        <h3>Frontend</h3>
        <p className="m-4">
          O frontend foi estruturado utilizando microfrontends utilizando o
          single-spa como orquestrador das aplicações. Desta forma conseguimos
          unir as habilidades de diversos alunos que estão estudando diferentes
          frameworks em prol do desenvolvimento da plataforma. Não importa se
          está estudando vue.js, react.js, angular, svelte, etc. Basta acessar a
          documentação do single-spa e construir uma aplicação que seja
          compativel com o modelo proposto. utilizar uma aplicação já existente
          também é válido, basta realizar os ajustes necessários.
        </p>
        <a
          href="https://single-spa.js.org/docs/getting-started-overview"
          target="_blank"
          className="btn btn-primary m-4"
          rel="noopener noreferrer"
        >
          Documentação da Single SPA
        </a>
        <h5>Responsável</h5>
        <a
          href="https://github.com/GuilhermeSnts"
          target="_blank"
          className="btn btn-outline-dark m-4"
          rel="noopener noreferrer"
        >
          Guilherme Santos
        </a>
        <h4>Repositórios do front</h4>
        <a
          href="https://github.com/compcederj/saladeestudos-root"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary m-2"
        >
          Orquestrador do front <small>(single-spa)</small>
        </a>
        <a
          href="https://github.com/compcederj/saladeestudos-landing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary m-2"
        >
          Landing page <small>(react.js)</small>
        </a>
      </div>
      <div
        className="px-4 py-5 my-5 text-center p-3 mb-5 container"
        id="backend"
      >
        <h3>Backend</h3>
        <p className="m-4">
          O backend está sendo desenvolvindo utilizando Python com o framework
          Flask, banco de dados PostgreSQL. Existe também a possibilidade de
          criar microserviços e utilizar a api em flask como gateway para
          autenticação.
        </p>
        <a
          href="https://flask.palletsprojects.com/en/1.1.x/quickstart/"
          target="_blank"
          className="btn btn-primary m-4"
          rel="noopener noreferrer"
        >
          Documentação do flask
        </a>
        <h5>Responsável</h5>
        <a
          href="https://github.com/thcborges"
          target="_blank"
          className="btn btn-outline-dark m-4"
          rel="noopener noreferrer"
        >
          Thiago Borges
        </a>

        <h4>Repositórios do front</h4>
        <a
          href="https://github.com/compcederj/sala-de-estudos-flask"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary m-2"
        >
          API <small>(flask)</small>
        </a>
      </div>
    </>
  );
}
