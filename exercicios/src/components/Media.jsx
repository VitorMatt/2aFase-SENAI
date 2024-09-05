import { useState } from 'react';
import './exercicios.css';

function Media() {

    const [resultado, setResultado] = useState();

    function calc() {

        const valor_um = Number(prompt('Digite um número'));
        const valor_dois = Number(prompt('Digite um número'));

        setResultado((valor_um + valor_dois) / 2);
    };

  return (

    <div className='exercicios'>
        <h2>Exercício para calcular a média de 2 números</h2>
        <button onClick={calc}>Calcular</button>
        <p>Média: {resultado}</p>
    </div>
  );
};

export default Media;