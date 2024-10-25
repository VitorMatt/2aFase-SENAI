import { useState, useContext } from 'react';
import Navbar from '../components/Navbar';
import { GlobalContext } from '../contexts/GlobalContext';
import './css/Cadastro.css'

function Cadastro() {

    const {user, setUser, users, setUsers} = useContext(GlobalContext);

    const [name, setName] = useState('');

    const cadastra = (e) => {

        e.preventDefault();
        // setUser(name);
        setUsers([...users, name]);
        console.log(users);
    };

  return (
    <div>
        <Navbar />
        <h1>Cadastre-se</h1>    
        <form onSubmit={cadastra}>
            <div className="input-container">
                <label htmlFor='inpt-name'>
                    Nome
                </label>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => { setName(e.target.value) }}
                    id='inpt-name'
                    />
            </div>
            <button type='submit'>
                Cadastrar-se
            </button>
            <div className="users">
                {
                    users.map((user, index) => (
                        
                        <div 
                            className="container-user" 
                            key={index}
                            >
                            <p>{user}</p>
                        </div>
                    ))
                }
            </div>
        </form>
    </div>
  );
};

export default Cadastro;