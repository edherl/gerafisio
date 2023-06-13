import { useState } from "react";

function Dynamometer() {
  const [data, setData] = useState({
    age: "",
    weight: "",
    genre: "",
  });

  const [man, setMan] = useState("");
  const [woman, setWoman] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value)) {
      setData({ ...data, [name]: value });
    } else {
      alert("Digite apenas números.");
    }
  };
  const handleCalculate = () => {
    const equation_1 =
      39.996 - 0.382 * data.age + 0.174 * data.weight + 13.628 * data.genre;
    const equation_2 =
      44.968 - 0.42 * data.age + 0.11 * data.weight + 9.274 * data.genre;
    const man = equation_1.toFixed(2).replace(".", ",");
    const woman = equation_2.toFixed(2).replace(".", ",");
    setMan(man);
    setWoman(woman);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.age || !data.weight) {
      alert("Preencha os campos corretamente.");
    }
  };

  return (
    <div>
      <h1>Dinamometria Manual</h1>

      <h2>Objetivo</h2>
      <p>
        Mensurar a força de preensão manual e determinar o nível de esforço
        exercido nos membros superiores.
      </p>

      <h2>Equipamento</h2>
      <p>Dinamômetro Jamar; cronômetro; cadeira com encosto (sem braços).</p>

      <h2>Protocolo</h2>
      <p>
        O avaliado deve estar confortavelmente sentado, posicionado com o ombro
        levemente aduzido, o cotovelo fletido a 90°, o antebraço em posição
        neutra e, por fim, a posição do punho pode variar de 0° a 30° de
        extensão. O resultado é obtido através do maior valor registrado entre
        as três medidas realizadas de forma alternada em cada braço, em um
        intervalo de 15 segundos entre cada avaliação. Recomenda-se que 3
        segundos de contração máxima sejam o suficiente para registrar a
        leitura. Não se deve realizar aquecimento muscular para a realização do
        teste. As orientações devem ser realizadas verbalmente e de forma que o
        avaliado compreenda a forma de execução do teste.
      </p>

      <h2>Ensaio</h2>
      <p>
        Após demonstração e orientação realizada pelo avaliador, o participante
        é questionado sobre o seu membro dominante.
      </p>

      <h2>Classificação</h2>
      <p>O escore ideal relativo ao paciente é obtido através da equação:</p>
      <li>
        Membro Dominante = 39,996 - (0,382 x idade) + (0,174 x peso em
        quilogramas) + (13,628 x homens = 1; mulheres = 0)
      </li>
      <li>
        Membro Não Dominante = 44,968 - (0,420 x idade) + (0,110 x peso em
        quilogramas) + (9,274 x homens = 1; mulheres = 0)
      </li>
      <br />

      <h2>Insira seus dados:</h2>
      <div>
        <form onSubmit={handleSubmit}>
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
          <label>Sexo:</label>
          <select name="genre" value={data.genre} onChange={handleInputChange}>
            <option value="1">Masculino</option>
            <option value="0">Feminino</option>
          </select>
          <button onClick={handleCalculate}>Calcular</button>
          <p className="result">
            Dominante: <b>{man}</b>
          </p>
          <p className="result">
            Não Dominante: <b>{woman}</b>
          </p>
        </form>
      </div>
      <br />
    </div>
  );
}

export default Dynamometer;
