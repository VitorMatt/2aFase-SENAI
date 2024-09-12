import { useState } from 'react';
import './Render.css';
import PainelAdm from '../components/PainelAdm';
import ProdutosParaMaiores from '../components/ProdutosParaMaiores';
import UserLogado from '../components/UserLogado';
import Login2 from '../components/Login2';

function Render() {

    const [adm, setAdm] = useState(true);
    const [age, setAge] = useState(0);
    const [user, setUser] = useState(false);

  return (
    <div>
      <h1>Renderizações condicionais</h1>
      <div className='render-container'>
        <button onClick={() => { setAdm(true) }}>Adm</button>
        <button onClick={() => { setAdm(false) }}>Cambacica</button>
        { 
          adm && <PainelAdm /> 
        }
      </div>

      <div className='render-container'>
        <button onClick={() => { setAge(age - 1) }}>-</button>
        {age}
        <button onClick={() => { setAge(age + 1) }}>+</button>
        {
          age>=18 && <ProdutosParaMaiores />
        }
      </div>

      <div className='render-container'>
        <button onClick={() => { setUser(true) }}>Logar</button>
        <button onClick={() => { setUser(false) }}>10Logar</button>
        { 
          user 
          ?
          <UserLogado /> 
          : 
          <Login2 />
        }
      </div>
    </div>
  );
};

export default Render;