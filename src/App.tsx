import React from 'react';
import './App.css';
import LandingTitle from './Components/LandingPage/LandingTitle';
import InitialButton from './Components/LandingPage/InitialButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LandingTitle txtColor='white'>WELCOME TO DMM...</LandingTitle>
        <InitialButton bgColor='white' txtColor='#849cca' mrSize='5px' pdSize='10px'>events</InitialButton>
      </header>
    </div>
  );
}

export default App;
