import { useState } from "react";

function MWT() {
  const [data, setData] = useState({
    height: "",
    age: "",
    weight: "",
  });

  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      setData({ ...data, [name]: value });
    } else {
      alert("Digite apenas números");
    }
  };

  const handleCalculate = () => {
    const tc6 = 7.57 * data.height - 5.02 * data.age - 1.76 * data.weight - 309;
    const result = tc6.toFixed(2).replace(".", ",");
    setResult(result);
  };

  return (
    <div>
      <h1>Teste de Caminhada de 6 Minutos</h1>
      <h2>Objetivo</h2>
      <p>
        Avaliar a resistência aeróbica percorrendo a maior distância pelo
        período de 6 minutos.
      </p>
      <h2>Equipamento</h2>
      <p>
        Cronômetro, fita métrica, cones (ou outro marcador) e/ou giz. Para
        manutenção da frequência cardíaca durante a realização do teste é
        utilizado cardiofrequencímetro.
      </p>
      <h2>Montagem</h2>
      <p>
        É demarcada no solo uma distância de 25 metros, sendo traçados segmentos
        de 5 metros para orientação. Os participantes caminham continuamente em
        redor do percurso marcado, durante um período de 6 minutos, tentando
        percorrer a maior distância possível.
      </p>
      <h2>Protocolo</h2>
      <p>
        Ao sinal de partida, os participantes são instruídos para caminhar o
        mais rapidamente possível na distância determinada à volta dos
        marcadores. Se necessário, os participantes podem parar e descansar,
        sentando-se e retomando ao percurso, sem, no entanto, interromper o
        cronômetro.
      </p>
      <h2>Precauções</h2>
      <p>
        Qualquer participante deve interromper o teste caso tenha tonturas, dor,
        náuseas ou fadiga.
      </p>
      <h2>Ensaio</h2>
      <p>
        O avaliador irá demonstrar o procedimento e permitir ao participante que
        pratique rapidamente para assegurar a compreensão do protocolo. Os
        participantes devem ser orientados verbalmente no sentido de obterem o
        desempenho máximo.
      </p>
      <h2>Classificação</h2>
      <p>
        O escore ideal relativo (predito) ao avaliado é obtido através da
        equação proposta por Enright e Sherrill (1998):
      </p>
      <p className="title">Homens</p>
      <li>
        TC6M (m) = (7,57 x altura em centímetros) – (5,02 x idade) – (1,76 x
        peso em quilogramas) – 309
      </li>
      <p className="title">Mulheres</p>
      <li>
        TC6M (m) = (2,11 x altura em centímetros) – (2,29 x peso em quilogramas)
        – (5,78 x idade) + 667
      </li>
      <br />

      <h2>Insira seus dados:</h2>
      <div>
        <label>Altura (centímetros):</label>
        <input
          type="text"
          name="height"
          placeholder="170"
          value={data.height}
          onChange={handleInputChange}
        />
        <label>Idade (anos):</label>
        <input
          type="text"
          name="age"
          placeholder="25"
          value={data.age}
          onChange={handleInputChange}
        />
        <label>Peso (quilogramas):</label>
        <input
          type="text"
          name="weight"
          placeholder="75"
          value={data.weight}
          onChange={handleInputChange}
        />
        <button onClick={handleCalculate}>Calcular</button>
        <p className="result">
          Resultado: <b>{result}</b>
        </p>
      </div>
      <br />
    </div>
  );
}

export default MWT;
