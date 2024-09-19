// Nosso amigo Mano Juca ganhou tanto dinheiro no Uber que resolveu 
// tirar férias. Sem destino, sem regras, vida loka, lobo solitário, sem 
// destino, um dia em cada lugar, sem dia pra voltar, até o dinheiro 
// acabar...
// Logo nos primeiros dias ele encontrou um paraíso e resolveu quebrar sua 
// única regra e ficar alguns dias por ali. Encontrou um albergue meio bom
// e fez check in, mas não conseguiu entender de forma alguma como o hotel 
// calculava o valor da conta. Ele é meio burro, vocês sabem...
// O albergue utilizas faixas de preço de acordo com o número de diárias
// Até 5 diárias, o preço por diária é R$100,00;
// De 6 a 10 diárias, R$90,00 por dia;
// A partir de 11 dias, sai R$80,00 por dia;
// Outros fatos relevantes para determinar o valor da conta:
// - Ele acabou ganhando um desconto a mais de 10% do valor total porque 
// teve um “envolvimento emocional” com a moça que trabalha no balcão;
// - Quando ele abriu a carteira pra pagar, a moça viu que ele tem a 
// carteirinha da Associação dos motoristas do Uber de Palhoça, entidade 
// com a qual o albergue tem convênio, e aplicou mais 15% (do valor total)
// de desconto;
// - Ele se passou e vai pagar multa de R$150 por danos materiais.
// Criar um programa que lê o número de dias que ele vai ficar no albergue 
// e apresente o valor final da conta e sua composição (os detalhes, 
// pagamentos, descontos...);

import { useState } from 'react';

function Ex1() {

    const [valorDesconto, setValorDesconto] = useState(0);
    const [dias, setDias] = useState();
    const [valorFinal, setValorFinal] = useState(0);
    const [descontos, setDescontos] = useState([10, 15]);
    const [valorTotal, setValorTotal] = useState(0);
    const precoDiariaAteCincoDias = 100;
    const multa = 150;
    const precoDiariaDeSeisAteDezDias = 90;
    const precoDiariaPartirDeOnzeDias = 80;
    let valorTotalAux;
    let valorDescAux;

    function calcValue() {

        switch (true) {

            case dias<=5 && dias>0:
                valorTotalAux = dias * precoDiariaAteCincoDias;
                setValorTotal(valorTotalAux);
                break;

            case dias>5 && dias<11:
                valorTotalAux = dias * precoDiariaDeSeisAteDezDias;
                setValorTotal(valorTotalAux);
                break;

            case dias>=11:
                valorTotalAux = dias * precoDiariaPartirDeOnzeDias;
                setValorTotal(valorTotalAux);
                break;

            default:
                alert('Digite um número válido');
        }

        // 25% - x
        // 100% - valorFinal
        // x = (valorFinal * 25) / 100;

        valorDescAux = ((descontos[0] + descontos[1]) * valorTotalAux) / 100;

        setValorDesconto(valorDescAux);

        setValorFinal((valorTotalAux - valorDescAux) + multa);
    }
    
  return (
    <div className='exercicios'>
    <label htmlFor='inpt'>Digite a quantidade de dias que você</label><br />
      <input
        type='number'
        value={dias}
        onChange={(e) => { setDias(e.target.value) }}
        id='inpt'
        /><br />

        <button onClick={calcValue}>Calcular</button>

        <strong>
            <p>Dias no hotel: {dias}</p>
            <p>Desconto: {descontos[0] + descontos[1]}% ({valorDesconto} R$)</p>
            <p>Multa: {multa} R$</p>
            <p>Valor Total: {valorTotal} R$</p>
            <p>Valor Final: {valorFinal} R$</p>
        </strong>
    </div>
  );
};

export default Ex1;