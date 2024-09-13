import { useState } from 'react';

function Ex3() {

    const [result, setResult] = useState();
    const [num, setNum] = useState();

  return (
    <div>
      <h2>Digite o número</h2>

      <input 
        type='number'
        value={num}
        onChange={(e) => { setNum(e.target.value) }}
        /><br /><br />

        <button onClick={() => { 
            num%2==0 
            ? 
            setResult('Par') 
            : 
            setResult('Ímpar') 
        }}>Par ou ímpar</button>

        <p>
            <strong>
                {result}
            </strong>
        </p>
    </div>
  );
};

export default Ex3;