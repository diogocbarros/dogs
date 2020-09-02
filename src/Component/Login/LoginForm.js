import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password
      })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      return json;
    })
  }
  return (
    <section>
      <form action="" onSubmit={handleSubmit}>
        <label>Login</label>
        <label>Usuario: </label>
        <input type="text" name="username" id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
        <label>Senha: </label>
        <input type="text" name="password" id="password" value={password} onChange={({ target }) => setPassword(target.value)} />
        <button>Entrar</button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  )
}

export default LoginForm
