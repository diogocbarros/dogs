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
      <hr />
      <TokenPost />
      <hr />
      <PhotoPost />
      <hr />
      <PhotoGet />
    </div>
  );
}

export default App;
