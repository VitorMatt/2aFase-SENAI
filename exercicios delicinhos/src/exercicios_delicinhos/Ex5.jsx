import { useState } from 'react';

// Senha Segura: Peça ao usuário para criar uma senha. Verifique se a senha tem pelo menos 8 caracteres.;

function Ex5() {

    const [result, setResult] = useState();
    const [password, setPassword] = useState();

    function verificaPassword() {

        password.split();

        if (password.length>=8) {

            setResult('Senha Forte!');
        } else {

            setResult('A senha deve ter no mínimo 8 caracteres!');
        }
    }

  return (
    <div>
      <h2>Crie uma senha</h2>
      <input
        type='text'
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
        /><br /><br />

        <button onClick={verificaPassword}>Enviar</button>

        <p>
            <strong>
                {result}
            </strong>
        </p>
    </div>
  );
};

export default Ex5;