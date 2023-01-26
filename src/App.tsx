import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import EventPage from './pages/EventPage/EventPage';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
}

export default App;
