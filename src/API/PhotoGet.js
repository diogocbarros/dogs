<<<<<<< HEAD
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
=======
import React from 'react'

const PhotoGet = () => {

>>>>>>> 965e7d04e1250c9fc3f68ffd32691912434f18a6
  const [id, setId] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://dogsapi.origamid.dev/json/api/photo/${id}`, {
      method: 'GET',
<<<<<<< HEAD
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
=======
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
      return json;
    })
>>>>>>> 965e7d04e1250c9fc3f68ffd32691912434f18a6
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Photo Get</h2>
<<<<<<< HEAD
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
=======
      <label htmlFor="id">Photo ID: </label>
      <input type="text" name="photoId" id="photoId" value={id} onChange={({ target }) => setId(target.value)} />
      <button>Ok!</button>
    </form>
  )
}

export default PhotoGet
>>>>>>> 965e7d04e1250c9fc3f68ffd32691912434f18a6
