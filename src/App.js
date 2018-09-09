import React,
{
  Component
}
from 'react';
import logo from './logo.svg';
import './App.css';

// electronJS ipcRenderer communication ##########
const electron = window.require('electron');
const fs = electron.remote.require('fs');
const ipcRenderer = electron.ipcRenderer;
// END OF electronJS ipcRenderer communication ######################

class App extends Component
{
  render()
  {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React/Electron</h2>
        </div>
        <p className="App-intro" onClick={()=>{ipcRenderer.send("focus main window")}}>
          Hello Electron!
        </p>
      </div>
    );
  }
}

export default App;