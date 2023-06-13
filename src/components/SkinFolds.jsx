function SkinFolds() {
  return (
    <div>
      <h1>Pregas Cutâneas</h1>

      <h2>Objetivo</h2>
      <p>
        Estimar o percentual de gordura corporal, a partir da verificação da
        espessura das pregas cutâneas.
      </p>

      <h2>Protocolos</h2>
      <p>
        Ao selecionar as equações apropriadas para calcular a porcentagem de
        gordura, é importante considerar o grupo de indivíduos em que a equação
        foi desenvolvida. Para ajudar nessa escolha, listamos as principais
        fórmulas de percentual de gordura e seus respectivos grupos
        populacionais para os quais elas são mais indicadas:
      </p>

      <table>
        <thead>
          <th>Referência</th>
          <th>Sujeitos</th>
        </thead>
        <tbody>
          <tr>
            <td>Durnin & Womerley (1974)</td>
            <td>Homens (17 a 72 anos) e Mulheres (16 a 68 anos)</td>
          </tr>
          <tr>
            <td>Jackson, Pollock & Ward (1978)</td>
            <td>Mulheres (18 a 55 anos)</td>
          </tr>
          <tr>
            <td>Guedes (1985) e Siri (1961)</td>
            <td>Ambos Brasileiros (18 a 20 anos)</td>
          </tr>
          <tr>
            <td>Petroski (1995) e Siri (1961)</td>
            <td>Ambos Brasileiros (18 a 66 anos)</td>
          </tr>
          <tr>
            <td>Lohman (1981) e Siri (1961)</td>
            <td>Homens Adultos</td>
          </tr>
          <tr>
            <td>Lohman (1986)</td>
            <td>Ambos Jovens (7 a 16 anos)</td>
          </tr>
          <tr>
            <td>Deurenberg (1999)</td>
            <td>Crianças (≤ 15 anos)</td>
          </tr>
        </tbody>
      </table>
      <p className="legend">
        <b>Tabela 1. </b>Referências de protocolos para avaliação por grupos
        etários.
      </p>

      <h2>Densidade Corporal</h2>
      <p>
        Após encontrar valor da Densidade Corporal (DC), pode-se utilizar a
        equação de Siri (1961) para obter o percentual de gordura do indivíduo:
      </p>
      <li>%G = [(4,95/DC) - 4,50] x 100</li>
      <p>
        Lohman (1986) indica que esta fórmula é adequada para homens de 20 a 50
        anos, sugerindo diferentes constantes de acordo com idade e sexo, sendo
        estas descritas abaixo.
      </p>
      <p className="title">Homens - Idade e Fórmula</p>
      <li>07 a 08: (538/D) – 497</li>
      <li>09 a 10: (530/D) – 489</li>
      <li>11 a 12: (523/D) – 481</li>
      <li>13 a 14: (507/D) – 464</li>
      <li>15 a 16: (503/D) – 459</li>
      <li>17 a 19: (498/D) – 453</li>
      <li>20 a 50: (495/D) – 450</li>
      <p className="title">Mulheres - Idade e Fórmula</p>
      <li>07 a 08: (543/D) – 503</li>
      <li>09 a 10: (535/D) – 495</li>
      <li>11 a 12: (525/D) – 484</li>
      <li>13 a 14: (512/D) – 469</li>
      <li>15 a 16: (507/D) – 464</li>
      <li>17 a 19: (505/D) – 462</li>
      <li>20 a 50: (503/D) – 459</li>

      <h2>Recomendações</h2>
      <li>Não realizar exercício físico vigoroso nas 24 horas antecedentes;</li>
      <li>
        Não consumir bebidas alcoólicas ou que contenham cafeína nas 24 horas
        antecedentes;
      </li>
      <li>
        Realizar as medições no hemicorpo direito do avaliado, para fins de
        padronização;
      </li>
      <li>
        Pinçar a prega cutânea com a mão esquerda, posicionar o adipômetro com a
        mão direita, realizar a leitura do ponteiro em até 2 segundos;
      </li>
      <li>
        Realizar a avaliação 3 vezes em cada prega cutânea, considerando a
        mediana dos 3 valores.
      </li>
      <br />
    </div>
  );
}

export default SkinFolds;
