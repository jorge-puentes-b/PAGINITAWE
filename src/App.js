import React, { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route } from "react-router-dom"
import Arrendatarios from "./pages/Arrendatarios/Arrendatarios.js"
import BuscarHogar from './pages/BuscarHogar/BuscarHogar.js';
import AgendarCitas from './pages/AgendarCitas/AgendarCitas.js';
import CitasProgramadas from './pages/CitasProgramadas/CitasProgramadas.js';
function App() {
  return(
    <>
    < BrowserRouter>
       < Routes>
          <Route path="/" element={<Arrendatarios/>}/>
          <Route path="/buscar-hogar" element={<BuscarHogar/>}/>
          <Route path="/agedar-citas" element={<AgendarCitas/>}/>
          <Route path="/citas-programadas" element={<CitasProgramadas/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
