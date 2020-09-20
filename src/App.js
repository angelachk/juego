import React from 'react';
import './App.css';
import Header from './components/Header';
import Tablero from './components/Tablero';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className="main-board">
          <Tablero />
        </div>
      </div>
  );
}
export default App;
