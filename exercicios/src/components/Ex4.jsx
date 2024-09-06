import { useState } from 'react';
import './exercicios.css';

function Ex4() {

    const [result, setResult] = useState({});

    function calculaTempo() {

        const distancia = Number(prompt('Digite a distância a ser percorrida.'));
        const velocidade = 300000;

        const tempo = distancia / velocidade;

        if (tempo<60) {

            setResult({
                segundos: tempo, 
                minutos: 0,
                horas: 0,
                dias: 0,
                meses: 0,
                anos: 0
            })
        }

        if (tempo>=60) {

            setResult({
                segundos: tempo, 
                minutos: (tempo/60).toFixed(0),
                horas: 0,
                dias: 0,
                meses: 0,
                anos: 0
            });
        } 
        
        if (tempo>=3600) {

            setResult({
                segundos: tempo,
                minutos: (tempo/60).toFixed(0),
                horas: ((tempo/60) /60).toFixed(1),
                dias: 0,
                meses: 0,
                anos: 0
            });
        } 
        
        if (tempo>=86400) {

            setResult({
                segundos: tempo,
                minutos: (tempo/60).toFixed(0),
                horas: ((tempo/60) /60).toFixed(1),
                dias: (((tempo/60)/60)/24).toFixed(0),
                meses: 0,
                anos: 0
            });
        } 
        
        if (tempo>=2592000) {

            setResult({
                segundos: tempo,
                minutos: (tempo/60).toFixed(0),
                horas: ((tempo/60) /60).toFixed(1),
                dias: (((tempo/60)/60)/24).toFixed(0),
                meses: ((((tempo/60)/60)/24)/30).toFixed(0),
                anos: 0
            });
        } 
        
        if (tempo>=31557600) {

            setResult({
                segundos: tempo,
                minutos: (tempo/60).toFixed(0),
                horas: ((tempo/60) /60).toFixed(1),
                dias: (((tempo/60)/60)/24).toFixed(0),
                meses: ((((tempo/60)/60)/24)/30).toFixed(0),
                anos: (((((tempo/60)/60)/24)/30)/12).toFixed(0)
            });
        }
    }

  return (
    <div className='exercicios'>
        <h2>Exercício 4 & 5</h2>
        <button onClick={calculaTempo}>Calcular</button>
        <p>Segundos: {result.segundos}</p><br />
        <p>Minutos: {result.minutos}</p><br />
        <p>Horas: {result.horas}</p><br />
        <p>Dias: {result.dias}</p><br />
        <p>Meses: {result.meses}</p><br />
        <p>Anos: {result.anos}</p>
    </div>
  );
};

export default Ex4;