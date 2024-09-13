import { useState } from 'react';
import MaiorDeIdade from './components/MaiorDeIdade';
import MenorDeIdade from './components/MenorDeIdade';
import Ex1 from './exercicios_delicinhos/Ex1';
import Ex2 from './exercicios_delicinhos/Ex2';
import Ex3 from './exercicios_delicinhos/Ex3';
import Ex4 from './exercicios_delicinhos/Ex4';
import Ex5 from './exercicios_delicinhos/Ex5';
import Ex6 from './exercicios_delicinhos/Ex6';
import './App.css';

function App() {

  const [input, setInput] = useState();
  const [component, setComponent] = useState();

  return (
    <>
    <Ex6 />
    <Ex5 />
    <Ex4 />
    <Ex3 />
    <Ex2 />
    <Ex1 />
      <div>
        <h1>Inputs</h1>

        <input 
          type='number'
          onChange={(e) => { setInput(e.target.value) }}
          value={input}
          /><br /><br />

          <button onClick={() => { input>=18 ? setComponent(<MaiorDeIdade />) : setComponent(<MenorDeIdade />)}}>Processar Idade</button>

          {component}
      </div>
    </>
  )
}

export default App;