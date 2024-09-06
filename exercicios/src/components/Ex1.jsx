import { useState } from 'react';
import './exercicios.css';

function Ex1() {

    const [result, setResult] = useState();

    function verificaNum() {

        const num = Number(prompt('Digite um número'));

        if (num>0) {

            setResult('Positivo!');
        } else if (num<0) {

            setResult('Negativo!');
        } else {

            setResult('Nulo!');
        }
    }

  return (
    <div className='exercicios'>
        <h2>Exercício 1</h2>
        <button onClick={verificaNum}>Descobrir</button>
        <p>{result}</p>
    </div>
  );
};

export default Ex1;