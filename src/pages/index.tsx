import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { HomePage } from './HomePage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
