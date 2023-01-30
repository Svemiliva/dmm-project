import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage';
import EventPage from './pages/EventPage/EventPage';
import { Route, Routes } from "react-router-dom"
import '@elastic/eui/dist/eui_theme_light.css';

import { EuiProvider } from '@elastic/eui';

function App() {
  return (
    <EuiProvider colorMode="light">
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/events' element={<EventPage />} />
    </Routes>
    </EuiProvider>
  );
}

export default App;
