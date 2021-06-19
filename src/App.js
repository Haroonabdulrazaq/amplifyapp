import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>We now have Auth!</h1>
        <p>Making changes to correct build error</p>
        <p>Add service role of AmplifyConsoleServiceRole-AmplifyRole</p>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
