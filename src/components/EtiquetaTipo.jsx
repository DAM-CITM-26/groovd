import { ICONO_TIPO } from '../data/iconos.js'

export default function EtiquetaTipo({ tipo }) {
  return <span className="tag">{ICONO_TIPO[tipo]} {tipo}</span>
}
