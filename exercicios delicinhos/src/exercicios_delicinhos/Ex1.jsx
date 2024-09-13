import { useState } from 'react';

// Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).

function Ex1() {

    const [weekDay, setWeekDay] = useState();
    const [message, setMessage] = useState();

    function calcWeekDay() {

        switch (true) {

            case weekDay==1:
                setMessage('Domingo');
                break;
            case weekDay==2:
                setMessage('Segunda');
                break;
            case weekDay==3:
                setMessage('Terça');
                break;
            case weekDay==4:
                setMessage('Quarta');
                break;
            case weekDay==5:
                setMessage('Quinta');
                break;
            case weekDay==6:
                setMessage('Sexta');
                break;
            case weekDay==7:
                setMessage('Sábado');
                break;
            default:
                setMessage('Você não digitou números de 1 a 7!');
        };
    };

  return (
    <div>
        <h2>Insira um número de 1 a 7.</h2><br />
        <input 
            type='number'
            value={weekDay}
            onChange={(e) => { setWeekDay(e.target.value) }}
            /><br /><br />

            <button onClick={calcWeekDay}>Ver dia da semana</button>

            <p>
                <strong>
                    {message}
                </strong>
            </p>
    </div>
  );
};

export default Ex1;