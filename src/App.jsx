import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// importando componentes de react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando componentes y vistas
import Navegacion from "./components/Navbar";
import Home from './views/Home';
import Pokemones from './views/Pokemones';
import Pokemon from './views/Pokemon';

// componente app con Router, Routes y Route
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegacion />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:id" element={<Pokemon />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}


