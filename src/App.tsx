import React from 'react';
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import EventPage from './Components/EventPage/EventPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/events' element={<EventPage />}/>
    </Routes>
  );
}

export default App;
