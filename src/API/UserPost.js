import React from 'react'

const UserPost = () => {
  const [username, setusername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setpassword] = React.useState('');

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
    }).then(response => {
      console.log(response);
      console.log(username, password, email);
      return response.json();
    }).then(json => {
      console.log(json);
      return json
    });
  }

  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Usuario: </label>
      <input type="text" name="username" id="username" value={username} onChange={({ target }) => setusername(target.value)} />

      <label htmlFor="email">E-mail: </label>
      <input type="email" name="email" id="email" value={email} onChange={({ target }) => setEmail(target.value)} />

      <label htmlFor="password">password: </label>
      <input type="password" name="password" id="password" value={password} onChange={({ target }) => setpassword(target.value)} />

      <button>Enviar</button>
    </form>

  )
}

export default UserPost;
