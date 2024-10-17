import { useState } from 'react';
import './CSS/Exercicio712.css';

/* 7.12 - Faça um algoritmo que:
 leia vários números e,
 informe quantos números entre 100 e 200 foram digitados (o 100 
e o 200 não contam),

Use input para entrar os números;

um botão para mandar ler o número digitado

um botão para mostrar os resultados */


function Exercicio712() {

    const [result, setResult] = useState(0);
    const [visible, setVisible] = useState(false);
    const [num, setNum] = useState();

  return (
    <div className='exercicio-container'>
        <div className='text-container'>
            <h1>Exercício 712</h1>
        </div>
        <div className='body-container'>

            <div className='input-container'>
                <label htmlFor='inpt'>
                    Digite um número de 100 a 200
                </label>
                <input 
                    type='number'
                    value={num}
                    onChange={(e) => { setNum(e.target.value) }}
                    id='inpt'
                    />
            </div>

            <div className='buttons-container'>
                <button onClick={() => { 
                    setVisible(false), 
                    (num>100 && num<200) 
                    && 
                    setResult(result + 1)} }>
                    <p>
                        Ler números
                    </p>
                </button>
                <button onClick={() => { setVisible(!visible) } }>

                    {
                        visible
                        ?
                        <p>Ocultar Resultado</p>
                        :
                        <p>Mostrar Resultado</p>
                    }
                </button>
            </div>
            <div className='result-container'>
                {
                    visible &&
                    <p>Quantidade de números entre 100 e 200: {result}</p>
                }
            </div>
        </div>
    </div>
  );
};

export default Exercicio712;