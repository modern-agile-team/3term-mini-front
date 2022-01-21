import React from 'react';
import { HomePage, BoardPage } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <BoardPage />
    </Routes>
  );
}

export default App;
