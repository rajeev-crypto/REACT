import logo from './logo.svg';
import React from 'react';
import './App.css';
import CC from './CC'
import FC from './FC'
import Parent from './Parent'

function App() {

  return (
  <div className = "App">
    <h1> Hello wOrld </h1>

    <CC/>
    <FC/>
    <Parent />
  </div>
  );
}

export default App;
