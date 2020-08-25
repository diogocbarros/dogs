import React from 'react';
import UserPost from './API/UserPost';
import './App.css';
import TokenPost from './API/TokenPost';
import PhotoPost from './API/PhotoPost';
import PhotoGet from './API/PhotoGet';
function App() {
  return (
    <div>
      <UserPost />
      <br />
      <hr />
      <TokenPost />
      <br />
      <hr />
      <PhotoPost />
      <br />
      <hr />
      <PhotoGet />
    </div>
  );
}

export default App;
