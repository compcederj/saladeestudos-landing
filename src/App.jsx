import React from "react";
import Logo from "./assets/logo.png";
import Card from "./components/Card";

export default function Root(props) {
  return (
    <>
      <nav className="bd-subnavbar py-2">
        <div className="container-xxl d-flex align-items-md-center">
          <a href="http://" className="mx-2">
            Desenvolvedor
          </a>
          <a href="http://" className="mx-2">
            Colabore
          </a>
          <a href="http://" className="mx-2">
            Cederj
          </a>
        </div>
      </nav>

      <div className="px-4 py-5 my-5 text-center shadow p-3 mb-5 bg-body rounded">
        <img src={Logo} className="mx-auto d-block mb-4" alt="" width="72" />
        <h1 className="display-5 fw-bold">Sala de estudos</h1>
        <h3 className="col-lg-6 mx-auto">
          Um ambiente feito por estudantes para estudantes.
        </h3>
      </div>

      <div className="container">
        <section className="mt-4 py-5 text-center">
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
          <a href="#" className="btn btn-primary my-4 mx-2">
            Grupo no telegram
          </a>
          <a href="#" className="btn btn-primary my-4 mx-2">
            Roadmap
          </a>
        </section>
        <section className="mt-4 py-5 text-center">
          <h1 className="">Qual graduação está cursando?</h1>
          <p className="my-4">
            os cursos estão sendo inseridos aos poucos. Caso o seu ainda não
            esteja disponível, você pode nos ajudar a adicioná-lo mais
            rapidamente.
          </p>

          <div className="row my-8">
            <div className="col">
              <Card />
            </div>
          </div>
        </section>

        <section className="mt-4 py-5">
          <h1 className="text-center">Como estudar as disciplinas</h1>
          <ul>
            <li>
              Assista às aulas com atenção para entender o que está sendo
              explicado e cobrado nas provas.
            </li>
            <li>
              Revise a aula estudada no mesmo dia para fixar o assunto
              explicado.
            </li>
            <li>
              Faça e refaça toda a sua AD proposta pelo professor e não deixe
              NUNCA para a ÚLTIMA HORA.
            </li>
            <li>
              Esteja pelo menos uma semana antes do cronograma da disciplina
              estudada.
            </li>
            <li>
              Tenha em posse o livro-texto da disciplina compre-o, pegue-o
              emprestado na biblioteca, ou tenha a versão digital no seu PC,
              tablet, smartphone, celular ou similares. Pois no livro-texto esta
              contido as explicações mais detalhadas que o professor demonstra
              na vídeo aula , explicações de exercícios de ADs e APs.
            </li>
            <li>
              Dúvida em relação a alguma questão ou quer uma explicação mais
              detalhada, vocês tem o auxílio do tutor presencial no seu polo,
              não tem tutor presencial no seu polo, tem também a ajuda do tutor
              a distância da sua disciplina, se tutor a distância não te explica
              de forma contundente, então utilize os fóruns ou grupos de estudo.
            </li>
            <li>
              Para fazer uma boa prova: Faça e refaça a sua ad, também estude
              pelas provas anteriores e esteja afiado no conteúdo das
              disciplinas.
            </li>
            <li>
              Este curso exige que o aluno seja autodidata e fornece o mínimo de
              suporte para o aluno. Se você ainda não é muito organizado, nunca
              colocou essas dicas em prática na vida e deixa tudo para a última
              hora, você pode sofrer demais neste curso.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
