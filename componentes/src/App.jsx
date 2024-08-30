import React, { useState } from 'react';
import Cabecalho from './components/Cabecalho';
import Links from './components/Links.jsx';
import Body from './components/Body.jsx';
import './App.css';

function App() {

  return (

    <>
      <Cabecalho />
      <Links />
      <Body />
    </>
  );
}

export default App;