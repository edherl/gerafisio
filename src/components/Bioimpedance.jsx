function Bioimpedance() {
  return (
    <div>
      <h1>Bioimpedância</h1>

      <h2>Objetivo</h2>
      <p>
        Analisar a composição corporal pela impedância bioelétrica através da
        verificação de dados como percentual de gordura e percentual de massa
        livre de gordura.
      </p>

      <h2>Equipamento</h2>
      <p>
        Aparelho de Bioimpedância Tetrapolar, marca Sanny, modelo BIA1010, e um
        computador (com conexão à internet) que contém o software do dispositivo
        instalado.
      </p>

      <h2>Restrições</h2>
      <p>
        Pessoas com desfibriladores cardíacos implantados, que possuam
        próteses/órteses metálicas não removíveis, em período menstrual ou
        gestacional, ou utilizando acessórios de material condutivo. O exame não
        deverá ser realizado caso o avaliado esteja com febre ou em choque.
      </p>

      <h2>Recomendações</h2>
      <p>
        Antes da realização do exame o avaliador deverá explicar ao paciente o
        procedimento do exame.
      </p>
      <li>
        Evitar uso de medicamentos diuréticos nas 24 horas anteriores à
        avaliação;
      </li>
      <li>
        Não é recomendado realizar exercícios físicos nas 12 horas anteriores à
        avaliação;
      </li>
      <li>
        Não ter ingerido bebidas alcoólicas ou que contenham cafeína nas 24
        horas anteriores à avaliação;
      </li>
      <li>Deve-se estar em jejum há pelo menos 4 horas.</li>
      <p>
        Se o indivíduo descumprir as recomendações, a avaliação poderá ser
        realizada, porém os dados obtidos apresentarão discrepância.
      </p>

      <h2>Protocolo</h2>
      <p>
        O indivíduo deverá permanecer deitado em posição supina. E permanecer
        imóvel durante a realização da avaliação (que durará poucos segundos).
        Os eletrodos coletores devem ser colocados diretamente sobre a pele e
        pinçados pelos conectores (vermelhos e pretos). Efetue tricotomia caso
        necessário. São colocados 4 eletrodos no avaliado, posicionados nos
        seguintes pontos:
      </p>
      <li>
        Linha da articulação do punho direito, no plano imaginário de união das
        duas apófises estilóides (fio vermelho);
      </li>
      <li>Base do dedo médio da mão direita (fio preto);</li>
      <li>Linha do tornozelo direito (fio vermelho);</li>
      <li>Base do 2º dedo do pé direito (fio preto).</li>

      <h2>Resultados</h2>
      <p className="title">Crianças e Adolescentes</p>
      <li>6 a 7 anos: KUSHNER (1992)</li>
      <li>8 a 15 anos: LOHMAN (1992)</li>
      <li>16 a 17 anos: HOUTKOOPER et al. (1992)</li>
      <p className="title">Homens</p>
      <li>18 a 29 anos: LOHMAN (1992)</li>
      <li>30 a 70 anos: GRAY et al. (1989)</li>
      <li>71 a 94 anos: BAUMGARTNER et al. (1991)</li>
      <p className="title">Mulheres</p>
      <li>18 a 21 anos: LOHMAN (1992)</li>
      <li>22 a 74 anos: GRAY et al. (1989)</li>
      <li>75 a 94 anos: BAUMGARTNER et al. (1991)</li>
      <br />
    </div>
  );
}

export default Bioimpedance;
