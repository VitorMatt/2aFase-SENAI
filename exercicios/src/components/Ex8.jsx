import { useState } from 'react';
import './exercicios.css';

// O porco: Faça um programa que leia o valor de um produto X e leia 
// a quantidade de moedas de um cofrinho que contenha: 
//  N moedas de 1 real; 
//  N moedas de 50 centavos; 
//  N moedas de 25 centavos; 
//  N moedas de 10 centavos; 
//  N moedas de 5 centavos; 
// O programa deverá verificar se o total de reais que contem no cofrinho é 
// o bastante para compra o produto X. 
// <Muleta da compreensão: Tem que ler o preço da coisa; tem que ler a 
// quantidade de cada moeda que tem no porco; calcular quantos pila tem no 
// porco; ver se cabe no “orçamento”>

function Ex8() {

  const [valorProduto, setValorProduto] = useState();
  const [result, setResult] = useState();

  function calcMoedas() {

    let moedas1Real = Number(prompt('Digite a quantidade de moedas de 1 real.'));
    let moedas50Cent = Number(prompt('Digite a quantidade de moedas de 50 centavos.'));
    let moedas25Cent = Number(prompt('Digite a quantidade de moedas de 25 centavos.'));
    let moedas10Cent = Number(prompt('Digite a quantidade de moedas de 10 centavos.'));
    let moedas5Cent = Number(prompt('Digite a quantidade de moedas de 5 centavos.'));

    const total = moedas1Real + (moedas50Cent * 0.50) + (moedas25Cent * 0.25) + (moedas10Cent * 0.10) + (moedas5Cent * 0.5);
  
    if (total>=valorProduto) {

      setResult('Você está apto para comprar o produto!');
    } else {

      setResult('Ops... Não há dinheiro o suficiente no cofrinho!');
    }
  }

  return (
    <div>
      <h2>Digite o valor do produto:</h2>
      <input
        type='number'
        value={valorProduto}
        onChange={(e) => { setValorProduto(e.target.value) }}
        /><br /><br />

      <button onClick={calcMoedas}>Informar a quantidade de moedas</button>

      <p>
        <strong>
          {result}
        </strong>
      </p>
    </div>
  );
};

export default Ex8;