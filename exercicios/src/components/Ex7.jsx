import { useState } from 'react';
import './exercicios.css';

function Ex7() {

    const [mediaFinal, setMediaFinal] = useState();
    const [conceito, setConceito] = useState();
    const [notas, setNotas] = useState([]);

    function calcMedia() {

        const nota1 = prompt('Digite a sua primeira nota.');
        const nota2 = prompt('Digite a sua segunda nota.');

        const notas2 = [];
        notas2.push(nota1);
        notas2.push(nota2);

        setNotas(notas2);

        const media = (Number(nota1) + Number(nota2)) / 2;
        setMediaFinal(media);

        if (media>=9 && media<=10) {

            setConceito('A');
        } else if (media<9 && media>=7.5) {

            setConceito('B');
        } else if (media>=6 && media<7.5) {

            setConceito('C');
        } else if (media>=4 && media<6) {

            setConceito('D');
        } else if (media>=0 && media<4) {

            setConceito('E');
        }
    }

  return (
    <div className='exercicios'>
      <h2>Exercício 7</h2><br />
      <button onClick={calcMedia}>Calcular</button>
      <p>Relatório:</p><br />
      <p>Notas: {notas[0]}, {notas[1]}</p><br />
      <p>Média: {mediaFinal}</p><br />
      <p>Conceito: {conceito}</p>
    </div>
  );
};

export default Ex7;