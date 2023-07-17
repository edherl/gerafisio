import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <p className="title-gerafisio">GERAFISIO</p>
        <p>
          Site elaborado para o programa de pós-graduação da UEPG e HU/UEPG. No
          site, os profissionais encontrarão informações sobre as os protocolos
          de avaliação física padrão do LAFISE/UEPG e HU/UEPG.
        </p>
      </div>
      <div className="container-assesment">
        <h2>
          <span>01. </span>Antropometria
        </h2>
        <p>
          A antropometria desempenha um papel fundamental no contexto do
          treinamento físico. Através da medição e análise antropométrica, é
          possível identificar desequilíbrios musculares, estimar a composição
          corporal, determinar o tipo de exercício mais adequado e estabelecer
          metas realistas para diferentes objetivos.
        </p>
        <div className="list">
          <Link to="/imc">
            <li className="li-home">IMC</li>
          </Link>
          <Link to="/bioimpedancia">
            <li className="li-home">Bioimpedância</li>
          </Link>
          <Link to="/pregas-cutaneas">
            <li className="li-home">Pregas Cutâneas</li>
          </Link>
          <Link to="/perimetros-de-circunferiencia">
            <li className="li-home">Circunferências</li>
          </Link>
        </div>
      </div>
      <div className="container-assesment">
        <h2>
          <span>02. </span>Flexibilidade
        </h2>
        <p>
          A flexibilidade refere-se à capacidade de movimentar as articulações e
          os músculos em uma amplitude de movimento adequada. No treinamento
          físico ela contribui para prevenir lesões, melhorar o desempenho,
          promover uma postura correta e aliviar tensões musculares.
        </p>
        <div className="list">
          <Link to="/wells">
            <li className="li-home">Banco de Wells</li>
          </Link>
        </div>
      </div>
      <div className="container-assesment">
        <h2>
          <span>03. </span>Testes Físicos
        </h2>
        <p>
          A avaliação através dos testes físicos é importante para fornecer
          informações objetivas sobre o nível de condicionamento físico e
          determinar pontos fortes e áreas a serem melhoradas. Esses testes
          fornecem dados quantitativos para monitorar o progresso e ajustar o
          treinamento.
        </p>
        <div className="list">
          <Link to="/sentar-e-levantar">
            <li className="li-home">Sentar e Levantar</li>
          </Link>
          <Link to="/flexao-de-cotovelos">
            <li className="li-home">Flexão de Cotovelos</li>
          </Link>
          <Link to="/dinamometria-manual">
            <li className="li-home">Dinamometria Manual</li>
          </Link>
          <Link to="/TC6">
            <li className="li-home">TC6</li>
          </Link>
          <Link to="/TUG">
            <li className="li-home">Timed Up and Go (TUG)</li>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
