import React from 'react';

function Login() {

  return (
    <div className='divLogin'>
      <h1>Login</h1>
      <label>Email</label>
      <input type='text' placeholder='Email'/>
      <label>Senha</label>
      <input type='text' placeholder='Senha'/>
      <button>Confirmar</button>
    </div>
  );
};

export default Login;