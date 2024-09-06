import { useState } from 'react';
import './exercicios.css';

function Ex2() {

    const [result, setResult] = useState();

    function verificaNum() {

        const num = Number(prompt('Digite um número'));

        if (num%2==0 && num>=0) {

            setResult('Par e Positivo!');
        } else {

            setResult('O número não é par e positivo!');
        };
    };

  return (
    <div className='exercicios'>
        <h2>Exercício 2</h2>
        <button onClick={verificaNum}>Verificar Número</button>
        <p>{result}</p>
    </div>
  );
};

export default Ex2;
