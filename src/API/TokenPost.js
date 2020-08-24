// const TOKEN_POST = {
//    endpoint: '/jwt-auth/v1/token',
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: {
//      username: '',
//      password: '',
//    },
//  };
import React from 'react';
import '../App.css';

const TokenPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setToken(json.token);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Token Post</h2>

      <label htmlFor="username">User Name: </label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label htmlFor="password">Senha: </label>
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button>Ok</button>
      <p>{token}</p>
    </form>
  );
};

export default TokenPost;
