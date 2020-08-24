// endpoint: https://dogsapi.origamid.dev/json/
// const USER_POST = {
//    endpoint: '/api/user',
//    method: 'POST',
//    headers: {
//      'Content-Type': 'application/json',
//    },
//    body: {
//      username: '',
//      password: '',
//      email: '',
//    },
//  };
import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Post</h2>
      <label htmlFor="username">User Name</label>
      <input
        type="text"
        valeu={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        valeu={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        valeu={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <button>Ok</button>
    </form>
  );
};

export default UserPost;
