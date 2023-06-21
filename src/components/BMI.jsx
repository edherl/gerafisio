import { useState } from "react";

function BMI() {
  const [data, setData] = useState({
    weight: "",
    height: "",
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

  const calculate = () => {
    const conversor = data.height / 100;
    const bmi = data.weight / (conversor * conversor);
    const formated = bmi.toFixed(2).replace(".", ",");
    setResult(formated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.weight || !data.height) {
      alert("Preencha os campos corretamente.");
    }
  };

  return (
    <div>
      <h1>Índice de Massa Corporal (IMC)</h1>

      <h2>Objetivo</h2>
      <p>
        Avaliar estatura, massa corporal e calcular o Índice de Massa Corporal
        (IMC).
      </p>

      <h2>Protocolo</h2>
      <p>
        Para a avaliação do peso e estatura, o avaliado deverá subir na
        plataforma da balança, ficar em posição anatômica seguindo o plano de
        Frankfurt. É recomendado que o avaliado esteja descalço, sem nenhum
        acessório (relógio, pulseira, colar, anéis etc) e com a menor quantidade
        possível de vestimentas.
      </p>

      <h2>Avaliação</h2>
      <p>
        O Índice de Massa Corporal (IMC) é uma maneira de medir o tamanho do
        corpo. É uma ferramenta para estimar a gordura corporal e rastrear
        obesidade e riscos à saúde. O IMC pode ser classificado as pessoas como
        abaixo do peso, acima do peso e obesas com base em sua altura e peso. As
        recomendações seguem os valores de referência fornecidos pela
        Organização Mundial de Saúde (OMS), sendo:
      </p>

      <table>
        <thead>
          <th>Classificação</th>
          <th>Valor</th>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>≤ 18,5</td>
          </tr>
          <tr>
            <td>Eutrófico</td>
            <td>18,5 - 24,9</td>
          </tr>
          <tr>
            <td>Acima do Peso</td>
            <td>25 - 29,9</td>
          </tr>
          <tr>
            <td>Obeso</td>
            <td>30 - 39,9</td>
          </tr>
          <tr>
            <td>Obesidade Mórbida</td>
            <td>≥ 40</td>
          </tr>
        </tbody>
      </table>
      <p className="legend">
        <b>Tabela 1. </b>Valores de referência para adultos com idades entre 20
        a 59 anos.
      </p>
      <br />

      <div>
        <p className="data">
          <b>Insira seus dados:</b>
        </p>
        <form onSubmit={handleSubmit}>
          <p>Peso (quilogramas):</p>
          <input
            type="text"
            name="weight"
            placeholder="70"
            value={data.weight}
            onChange={handleInputChange}
          />
          <p>Estatura (centímetros):</p>
          <input
            type="text"
            name="height"
            placeholder="170"
            value={data.height}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={calculate}>
            Calcular
          </button>
          <p className="result">
            <span>
              <b>01: </b>
            </span>
            Seu IMC é: <b>{result}</b>
          </p>
        </form>
      </div>
      <br />
    </div>
  );
}

export default BMI;
