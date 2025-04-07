import { useState } from "react";
import Aleatorios from './Componentes/Aleatorios';
import Capturados_Originales from './Componentes/Capturados_Originales';
import Detalle from './Componentes/Detalle';
import Favoritos from './Componentes/Favoritos';
import Listas from './Componentes/Listas';
import Usuarios from './Componentes/Usuarios';

import './App.css'

function App(){
    return (
        <>
        <h1>app</h1>
        <Aleatorios />
        <Capturados_Originales />
        <Detalle />
        <Favoritos />
        <Listas />
        <Usuarios />
        </>
    )
}

export default App;