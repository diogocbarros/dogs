// const TOKEN_POST = {
//   endpoint: '/jwt-auth/v1/token',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: {
//     username: '',
//     password: '',
//   },
// };

import React from 'react'

const TokePost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" id="username" value={username} onChange={({ target }) => setUsername(target.value)} />
      <input type="text" name="username" id="username" value={password} onChange={({ target }) => setPassword(target.value)} />

      <button>Token</button>
    </form>
  )
}

export default TokePost;
