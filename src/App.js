import React from 'react';
import './App.css';
import Subject from './subject.js';

function App() {
  return (
    <div className="App">
      
      <Subject dayTemperature="40°C" dayWeather="Very hot"/>  
      
      <hr/>

      <Subject dayTemperature="35°C" dayWeather="Hot"/>

      <hr/>

      <Subject dayTemperature="30°C" dayWeather="Moderate"/>

    </div>
  );
}

export default App;
