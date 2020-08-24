// const PHOTO_POST = {
//    endpoint: '/api/photo',
//    method: 'POST',
//    headers: {
//      Authorization: 'Bearer ' + token,
//    },
//    body: {
//      img: 'FORM_DATA',
//      nome: '',
//      peso: '',
//      idade: '',
//    },
//  };
import React from 'react';

const PhotoPost = () => {
  const [nome, setNome] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [img, setImg] = React.useState('');
  const [token, setToken] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const formDt = new FormData();
    formDt.append('nome', nome);
    formDt.append('peso', peso);
    formDt.append('idade', idade);
    formDt.append('img', img);

    fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formDt,
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Photo Post</h2>
      <label htmlFor="nome">Nome: </label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
      />
      <label htmlFor="peso">Peso: </label>
      <input
        type="text"
        name="peso"
        id="peso"
        value={peso}
        onChange={({ target }) => setPeso(target.value)}
      />
      <label htmlFor="idade">Idade: </label>
      <input
        type="text"
        name="idade"
        id="idade"
        value={idade}
        onChange={({ target }) => setIdade(target.value)}
      />
      <label htmlFor="token">Token: </label>
      <input
        type="text"
        name="token"
        id="token"
        value={token}
        onChange={({ target }) => setToken(target.value)}
      />

      <input type="file" onChange={({ target }) => setImg(target.files[0])} />
      <button>Ok</button>
    </form>
  );
};

export default PhotoPost;
