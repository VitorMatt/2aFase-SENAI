import { useState } from 'react';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile.jsx';
import Render from './pages/Render.jsx';
import './App.css';

function App() {

  const [page, setPage] = useState(<Home />);

  return (
    <>
    <nav>
        <button onClick={() => { setPage(<Home />) }}>Home</button>
        <button onClick={() => { setPage(<Login />) }}>Login</button>
        <button onClick={() => { setPage(<Profile />) }}>Profile</button>
        <button onClick={() => { setPage(<Render />) }}>Render</button>
    </nav>
      {page}
    </>
  );
};

export default App;