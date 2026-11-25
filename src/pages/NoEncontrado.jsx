import { Link } from 'react-router-dom'
import Vacio from '../components/Vacio.jsx'

export default function NoEncontrado() {
  return (
    <>
      <Vacio icono="🧭" texto="Esta página no existe." />
      <p className="centrado">
        <Link className="btn enlace-btn" to="/">
          Volver al inicio
        </Link>
      </p>
    </>
  )
}