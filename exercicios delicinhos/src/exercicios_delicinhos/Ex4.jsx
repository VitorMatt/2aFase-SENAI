import { useState } from 'react';

// Calculadora Simples: Crie uma calculadora simples que peça ao usuário dois números e uma operação (adição, subtração, multiplicação ou divisão) e, em seguida, exiba o resultado.

function Ex4() {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState();

  return (
    <div>
      <h2>Digite o primeiro número</h2>

      <input 
        type='number'
        value={num1}
        onChange={(e) => { setNum1(e.target.value) }}
        />

    <h2>Digite o primeiro número</h2>

    <input 
        type='number'
        value={num2}
        onChange={(e) => { setNum2(e.target.value) }}
        /><br />

        <button onClick={() => { setResult(Number(num1) + Number(num2)) }}>Somar</button>
        <button onClick={() => { setResult(Number(num1) - Number(num2)) }}>Subtrair</button>
        <button onClick={() => { setResult(Number(num1) * Number(num2)) }}>Multiplicar</button>
        <button onClick={() => { setResult(Number(num1) / Number(num2)) }}>Dividir</button>

        <p>
            <strong>
                {result}
            </strong>
        </p>
    </div>
  );
};

export default Ex4;