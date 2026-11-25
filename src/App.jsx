import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout.jsx'
import Inicio from './pages/Inicio.jsx'
import Buscar from './pages/Buscar.jsx'
import Contenido from './pages/Contenido.jsx'
import NoEncontrado from './pages/NoEncontrado.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="buscar" element={<Buscar />} />
        <Route path="contenido/:id" element={<Contenido />} />
        <Route path="*" element={<NoEncontrado />} />
      </Route>
    </Routes>
  )
}