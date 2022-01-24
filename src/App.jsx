import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Formulario } from './components/Formulario';
import { Inicio } from './components/Inicio';

export const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio/>} />
      <Route path="/formulario" element={<Formulario/>} />
    </Routes>
  </BrowserRouter>
    );
};
