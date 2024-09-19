// Foi feita um a pesquisa entre os habitantes de um a região e 
// coletados os dados de altura e gênero (0=masc , 1=fem) das pessoas. Faça 
// um programa que leia os dados de 10 pessoas e informe: 
//  a maior e a menor altura encontrada; 
//  a média de altura das mulheres; 
//  a média de altura da população; 
//  o percentual de homens na população.

import { useState } from 'react';

function Ex2() {

    const [maiorAltura, setMaiorAltura] = useState(0);
    const [menorAltura, setMenorAltura] = useState();
    const [mediaAlturaMulheres, setMediaAlturaMulheres] = useState();
    const [mediaAlturaPopulacao, setMediaAlturaPopulacao] = useState();
    const [percentualHomens, setPercentualHomens] = useState();

    function calc() {

        const alturas = [];
        let altura;
        let genero;
        let somaAlturas = 0;
        let somaAlturaMulheres = 0;
        let quantidadeHomens = 0;
        let quantidadeMulheres = 0;
        let count = 0;

        do {

            altura = Number(prompt('Digite a altura'));
            genero = prompt('Digite o gênero');
            alturas.push({
                genero: genero,
                altura: altura
            });
            
            count++;

        } while (count<10);

        for (let i=0; i<alturas.length; i++) {

            if (alturas[i].genero=='f') {

                somaAlturaMulheres+= alturas[i].altura;
                quantidadeMulheres++;
            }

            if (alturas[i].genero=='m') {

                quantidadeHomens++;
            }

            somaAlturas+= alturas[i].altura;

            if (menorAltura==null || i==0) {

                setMenorAltura(alturas[i].altura);
            } else if (alturas[i].altura<=menorAltura) {

                setMenorAltura(alturas[i].altura);
            }
            
            if (alturas[i].altura>=maiorAltura) {

                setMaiorAltura(alturas[i].altura);
            }                
        }

        setMediaAlturaMulheres(somaAlturaMulheres / quantidadeMulheres);

        // x - quantidade homens
        // 100% - 10
        setPercentualHomens((quantidadeHomens * 100) / 10);

        setMediaAlturaPopulacao(somaAlturas / 10);
    }

  return (
    <div className='exercicios'>
        <button onClick={calc}>Calcular</button><br />
        <p>Média de altura da população: {mediaAlturaPopulacao}</p>
        <p>Média de altura das mulheres: {mediaAlturaMulheres}</p>
        <p>Percentual de Homens: {percentualHomens}</p>
        <p>Maior altura: {maiorAltura}</p>
        <p>Menor altura: {menorAltura}</p>
    </div>
  );
};

export default Ex2;