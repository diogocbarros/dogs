import React from 'react'

const PhotoGet = () => {

  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`, {
      method: 'GET',
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      return json;
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Photo Get</h2>
      <label htmlFor="id">Photo ID: </label>
      <input type="text" name="photoId" id="photoId" value={id} onChange={({ target }) => setId(target.value)} />
      <button>Ok!</button>
    </form>
  )
}

export default PhotoGet
