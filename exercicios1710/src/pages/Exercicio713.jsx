/*7.13 - Faça um algoritmo que leia dois números e mostre todos os números 
pares contidos entre eles. 
Exemplo: 
 - Limite inferior: 3 
 - Limite superior: 12 
 - Saída: 4 6 8 10*/

import { useState } from 'react';

function Exercicio713() {

    const [num1, setNum1] = useState();
    const [num2, setNum2] = useState();
    const [result, setResult] = useState([]);

    const calc = () => {

        setResult([]);
        
        let resultAux = [];


        for (let i=Number(num1) + 1; i<num2; i++) {

            if (i % 2==0) {

                resultAux.push(i);
            }
        }

        setResult(resultAux);
    }

  return (
    <div className='exercicio-container'>
        <div className='body-container'>
            <div className='text-container'>
                <h1>Exercício 713</h1>
            </div>
            <div className='input-container'>
                <label htmlFor='inpt-um'>
                    Digite o primeiro número
                </label>
                <input 
                    type='number'
                    value={num1}
                    onChange={(e) => { setNum1(e.target.value) }}
                    id='inpt-um'
                    />
                <label htmlFor='inpt-dois'>
                    Digite o segundo número
                </label>
                <input 
                    type='number'
                    value={num2}
                    onChange={(e) => { setNum2(e.target.value) }}
                    id='inpt-dois'
                    />
            </div>
            <div className='buttons-container'>
                <button onClick={calc}>
                    Calcular
                </button>
            </div>
            <div className='result-container'>
                <p>
                    {result}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Exercicio713;