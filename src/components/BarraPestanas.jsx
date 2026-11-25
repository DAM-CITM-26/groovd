import { NavLink } from 'react-router-dom'

export default function BarraPestanas() {
  return (
    <nav className="pestanas" aria-label="Secciones">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'activa' : '')}>
        <span aria-hidden="true">🎧</span>Inicio
      </NavLink>
      <NavLink to="/buscar" className={({ isActive }) => (isActive ? 'activa' : '')}>
        <span aria-hidden="true">🔍</span>Buscar
      </NavLink>
    </nav>
  )
}