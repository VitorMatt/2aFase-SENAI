import { useState } from 'react';
import './exercicios.css';

function Exemplo() {

    const [resultado, setResultado] = useState(0);

  return (
    <div className='exercicios'>
      <h2>Contador</h2>
        <button onClick={ () => { setResultado(resultado + 1) } }>+</button>
        <p>{resultado}</p>
        <button onClick={ () => { setResultado(resultado - 1) } }>-</button>
    </div>
  );
};

export default Exemplo;