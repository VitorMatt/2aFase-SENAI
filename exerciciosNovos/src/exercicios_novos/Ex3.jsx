// Enzo e Valentina:
// Valentina, a irmã do Mano Juca tem 1.50m e cresce 2 centímetros por ano, 
// enquanto Enzo, o irmão mais novo, tem 1.40m e cresce 3 centímetros por 
// ano. Crie um programa/script/algoritmo que mostre quando Enzo será mais 
// alto que Valentina.

import { useState } from 'react';

function Ex3() {

    const [result, setResult] = useState('');

    function calc() {

        const crescimentoValentina = 0.02;
        const crescimentoEnzo = 0.03;
        let alturaValentina = 1.50;
        let alturaEnzo = 1.40;
        let anos;

        for (let i=1; alturaEnzo<alturaValentina; i++) {
            
            alturaEnzo+= crescimentoEnzo;
            alturaValentina+= crescimentoValentina;
            anos = i;
        }

        setResult('Enzo será mais alto que valentina em ' + anos + ' anos.');
    }

  return (
    <div className='exercicios'>
      <button onClick={calc}>Descobrir</button>
      <p>{result}</p>
    </div>
  );
};

export default Ex3;