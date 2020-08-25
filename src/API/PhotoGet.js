// // query: ?_total=1&_page=1&_user=6
// const PHOTO_GET = {
//    endpoint: {
//      photos: '/api/photo',
//      photos_query: '/api/photo/?_total=9&_page=1&_user=0',
//      photo: '/api/photo/:id',
//    },
//    method: 'GET',
//  };

import React from 'react';

const PhotoGet = () => {
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`, {
      method: 'GET',
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
      <h2>Photo Get</h2>
      <label htmlFor="photo">Photo ID: </label>
      <input
        type="text"
        name="photo"
        id="photo"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />
      <button>Ok!</button>
    </form>
  );
};

export default PhotoGet;
