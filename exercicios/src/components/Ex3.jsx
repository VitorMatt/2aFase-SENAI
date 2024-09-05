import { useState } from 'react';
import './exercicios.css';

function Ex3() {

    const [result, setResult] = useState();

    function verifica() {

        const salario = Number(prompt('Digite o seu salário.'));
        const emprestimo = Number(prompt('Digite valor do empréstimo.'));
        const prestacao = Number(prompt('Digite valor da prestação.'));

        if (salario<=0 || prestacao<=0 || emprestimo<=0) {

            setResult('Os valores não podem ser nulos ou negativos!');
        } else {

            const porcentagem = (prestacao * 100) / salario;

            if (porcentagem>30) {

                setResult('O impréstimo não pode ser concedido!');
            } else {

                setResult('O empréstimo pode ser concedido!');
            }
        }
    }

  return (
    <div className='exercicios'>
        <h2>Não tem garçom de cara feia</h2>
        <button onClick={verifica}>Verificar</button>
        <p>{result}</p>
    </div>
  );
};

export default Ex3;