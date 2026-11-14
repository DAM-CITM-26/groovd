import EtiquetaTipo from './EtiquetaTipo.jsx'
import { ICONO_TIPO } from '../data/iconos.js'
import { escuchasCortas } from '../utils/contenidos.js'

export default function FilaContenido({ contenido }) {
  return (
    <li>
      <span className="avatar" style={{ background: 'var(--color-primario)' }}>
        {ICONO_TIPO[contenido.tipo]}
      </span>
      <div className="crece">
        <h3>{contenido.titulo}</h3>
        <p className="card-meta">
          {contenido.artista} · {escuchasCortas(contenido.escuchasSemana)} escuchas
        </p>
      </div>
      <EtiquetaTipo tipo={contenido.tipo} />
    </li>
  )
}