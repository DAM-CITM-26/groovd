import FilaContenido from './FilaContenido.jsx'
import Vacio from './Vacio.jsx'

export default function ListaContenidos({ contenidos, vacio }) {
  if (contenidos.length === 0) return <Vacio icono="🎧" texto={vacio} />

  return (
    <ul className="list">
      {contenidos.map((contenido) => (
        <FilaContenido key={contenido.id} contenido={contenido} />
      ))}
    </ul>
  )
}