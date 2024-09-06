import { useState } from 'react';
import './exercicios.css';

function Ex6() {

    const [result, setResult] = useState();

    function calc() {

        const valorProduto = Number(prompt('Digite o valor do produto.'));
        
        if (valorProduto<20) {

            setResult(valorProduto + (valorProduto * 45 / 100));
        } else {

            setResult(valorProduto + (valorProduto * 30 / 100));
        }
    }

  return (
    <div className='exercicios'>
      <h2>Exercício 6</h2>
      <button onClick={calc}>Calcular</button>
      <p>{result} R$</p>
    </div>
  );
};

export default Ex6;