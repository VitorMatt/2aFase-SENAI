import { useState } from 'react';

// Conversor de Temperatura: Crie um conversor de temperatura que peça ao usuário para inserir uma temperatura em Celsius e, em seguida, converta-a para Fahrenheit.

function Ex6() {

    const [result, setResult] = useState();
    const [num, setNum] = useState();

  return (
    <div>
        <h2>Digite a temperatura em celsius</h2>
        <input
            type='number'
            value={num}
            onChange={(e) => { setNum(e.target.value) }}
            /><br /><br />

            <button onClick={() => { setResult((Number(num)*1.8 + 32) + ' °F')}}>Calcular</button>

            <p>
                <strong>
                    {result}
                </strong>
            </p>
    </div>
  );
;}

export default Ex6;