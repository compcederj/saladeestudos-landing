import React from "react";
import Logo from "../assets/logo.png";
import StudyImg from "../assets/study.svg";

import Card from "../components/Card";
import Navigation from "../components/Navigation";
import StudyTipList from "../components/StudyTipList";

export default function Landing(props) {
  return (
    <>
      <Navigation />

      <div className="px-4 py-5 my-5 text-center p-3 mb-5 bg-body rounded">
        <img src={Logo} className="mx-auto d-block mb-4" alt="" width="72" />
        <h1 className="display-5 fw-bold">Sala de estudos</h1>
        <h3 className="col-lg-5 mx-auto">
          Um ambiente feito por estudantes para estudantes.
        </h3>
        <a href="#degree" className="btn btn-primary my-4 mx-2">
          Acessar a área do aluno
        </a>
      </div>

      <section className="mt-4 py-5">
        <div className="container">
          <div className="row">
            <div className="col">
            <h1 className="">O que é a sala de estudos</h1>
          <p className="my-4">
            Este é um projeto totalmente colaborativo desenvolvido e mantido por
            alunos de computação da UFF, que tem por objetivo centralizar
            informações sobre os diversos cursos do CEDERJ e facilitar o acesso
            as aulas e ferramentas de aprendizado. Não recebemos qualquer apoio
            ou colaboração financeira das instituições, portanto fique a vontade
            para ajudar o projeto a crescer, contribuindo com código,
            informações ou doações.
          </p>
          <a
            href="https://trello.com/b/540AkVB1/sala-de-estudos-cederj"
            target="_blank"
            className="btn btn-outline-primary my-4 mx-2"
          >
            Nosso roadmap
          </a>
          <a
            href="/get-involved"
            className="btn btn-outline-primary my-4 mx-2"
          >
            Como contribuir
          </a>
            </div>
            <div className="col">
              <img src={StudyImg} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="degree" className="mt-4 py-5 text-center">
        <div className="container">
          <h1 className="">Qual graduação está cursando?</h1>
          <p className="my-4">
            os cursos estão sendo inseridos aos poucos. Caso o seu ainda não
            esteja disponível, você pode nos ajudar a adicioná-lo mais
            rapidamente.
          </p>

          <div className="row py-5">
            <div className="col">
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 py-5 bg-dark text-white">
        <div className="container">
          <h1 className="text-center my-5">Como estudar as disciplinas</h1>
          <StudyTipList />
        </div>
      </section>
    </>
  );
}
