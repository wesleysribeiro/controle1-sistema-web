import React from 'react';
import './App.css';
import ChartWidget from './ChartWidget.js';
import InputForm from './InputForm.js'; 
import OutputForm from './OutputForm.js';

function App() {
  return (
    <div className="App">
      <h1> Sistema Web - Controle 1 </h1>
      <div className="input-frame frame">
        <h2> Sinal de entrada</h2>
        <ChartWidget/>
        <InputForm/>
      </div>
      <div className="output-frame frame">
        <h2> Sinal de saída </h2>
        <OutputForm/>
      </div> 
      <div className="copyright">
          {(new Date()).getFullYear()} © Desenvolvido por Matheus Ramos, Osni Sokoloski, Rafael Bueno e Wesley Ribeiro
      </div>
    </div>
  );
}

export default App;
