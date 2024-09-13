import { useState } from 'react';
import { useEffect } from 'react';

// Jogo de Adivinhação: Crie um número aleatório entre 1 e 10. Peça ao usuário para adivinhar o número e, em seguida, diga se eles acertaram ou não.;

function Ex2() {

    
    const [numAleatorio, setNumAleatorio] = useState();
    const [numDigitado, setNumDigitado] = useState();
    const [message, setMessage] = useState();
    const [acertou, setAcertou] = useState(false);

    useEffect(() => {

        setNumAleatorio(Math.floor(Math.random() * (10 - 1) + 1));
    }, [acertou]);
    
    function comparaNum() {

        if (numDigitado==numAleatorio) {

            setMessage('Na Mosca!');
            setAcertou(true);
        } else if (numDigitado>numAleatorio) {

            setMessage('O número é menor!');
            setAcertou(false);
        } else if (numDigitado<numAleatorio) {

            setMessage('O número é maior!');
            setAcertou(false);
        }
    }

  return (
    <div>
        <h2>Adivinhe o número entre 1 a 10</h2>
        <input
            type='number'
            value={numDigitado}
            onChange={(e) => { setNumDigitado(e.target.value) }}
            />

        <button onClick={comparaNum}>Advinhar</button>

        <p>
            <strong>
                {message}
            </strong>
        </p>
    </div>
  );
};

export default Ex2;