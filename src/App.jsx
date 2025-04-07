import { useState } from "react";
import Aleatorios from './Componentes/Aleatorios';
import Capturados_Originales from './Componentes/Capturados_Originales';
import Detalle from './Componentes/Detalle';
import Favoritos from './Componentes/Favoritos';
import Listas from './Componentes/Listas';
import Usuarios from './Componentes/Usuarios';

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listas />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados_Originales />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}

export default App;