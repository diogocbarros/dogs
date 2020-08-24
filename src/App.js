import React from 'react';
import UserPost from './API/UserPost';
import './App.css';
import TokenPost from './API/TokenPost';
import PhotoPost from './API/PhotoPost';
function App() {
  return (
    <div>
      <UserPost />
      <br />
      <hr />
      <br />
      <TokenPost />
      <br />
      <hr />
      <br />
      <PhotoPost />
    </div>
  );
}

export default App;
