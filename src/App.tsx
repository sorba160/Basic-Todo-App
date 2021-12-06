import React from 'react';

import './App.scss';
import Performtodo from './components/performtodo/Performtodo';

function App() {
  return (
    <div className="App">
      <div className="Main-heading">
        <h1> Add Your Todos and Days</h1>
      </div>
      <Performtodo />
    </div>
  );
}

export default App;
