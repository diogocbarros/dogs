import React from 'react';
import './App.css';
import UserPost from './API/UserPost';
import TokePost from './API/TokePost';

function App() {
  return (
    <div>
      <UserPost />
      <p></p>
      <TokePost />
    </div>
  );
}

export default App;
