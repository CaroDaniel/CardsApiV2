import { useState, useEffect } from "react";
import Aleatorios from './Componentes/Aleatorios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Capturados_Originales from './Componentes/Capturados_Originales';
import Detalle from './Componentes/Detalle';
import Favoritos from './Componentes/Favoritos';
import Listas from './Componentes/Listas';
import Usuarios from './Componentes/Usuarios';
import Menu from './Componentes/Menu';
import Login from './Componentes/login';
import Registro from './Componentes/registro';
import Administrador from "./Componentes/Administrador";
import { supabase } from "./supabase";


import './App.css'
import { AppProvider } from "./Contexto/Contexto";

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }
    verificarSesion();

    // Escucha cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);
  if (cargando) return <p>Cargando...</p>;
  return (
    <AppProvider>
      <Router>

        {usuario && <Menu />}

        <Routes>
          <Route path="/" element={usuario ? <Listas /> : <Navigate to="/login"/>} />
          <Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/capturados" element={usuario ? <Capturados_Originales /> : <Navigate to="/login" />} />
          <Route path="/favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/detalle/:name" element={usuario ? <Detalle /> : <Navigate to="/login" />} />

          <Route path="/administrador" element={usuario ? <Administrador /> : <Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;