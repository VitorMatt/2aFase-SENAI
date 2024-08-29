import React from 'react';
import './App.css';

function App() {

  return(
    <>
      <h1>Atalhos VS Code</h1>
      <h2>Coisas legais para facilitar tua vida</h2>
      
      <ul>
        <li>Atalho: alt + z para quebra automatica de linha</li>
        <li>Atalho: alt + clique esquerdo para adicionair novos cursores</li>
        <li>Atalho: ctrl + shift + K para excluir uma linha inteira</li>
        <li>Atalho: ctrl + ; para comentar/descomentar</li>
        <li>Atalho: windows+. abre teclado de emoji</li>
        <li>Atalho: alt + ↕ para mover uma linha inteira</li>
        <li>Atalho: alt + shit + ↕ copia a linha atual ou bloco selecionado</li>
        <li>Atalho: ctrl + j ou ctrl + ' abre/fecha o terminal</li>
      </ul><br />

      <h1>Extensões</h1>

      <ul>
        <li>Extensão: ES7 React/Redux/GraphQL...</li>
        <li>Extensão: Auto Rename Tag</li>
        <li>Extensão: Color Highlight</li>
        <li>Extensão: Power Mode</li>
        <li>VS Code Pets</li>
      </ul>
    </>
  );
}

export default App;