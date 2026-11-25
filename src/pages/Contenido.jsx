import { useParams } from 'react-router-dom'
import { useContenido } from '../hooks/useContenido.js'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/ErrorCarga.jsx'
import Caratula from '../components/Caratula.jsx'
import EtiquetaTipo from '../components/EtiquetaTipo.jsx'
import NoEncontrado from './NoEncontrado.jsx'

export default function Contenido() {
  const { id } = useParams()
  const { contenido, cargando, error, reintentar } = useContenido(id)

  if (cargando) return <Cargando />
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />
  if (!contenido) return <NoEncontrado />

  return (
    <article className="stack">
      <h2>{contenido.titulo}</h2>
      <div className="card">
        <Caratula contenido={contenido} />
      </div>
      <div className="row">
        <EtiquetaTipo tipo={contenido.tipo} />
        <span className="card-meta">
          {contenido.artista} · {contenido.anio}
        </span>
      </div>
      <p className="card-meta">{contenido.genero}</p>
    </article>
  )
}