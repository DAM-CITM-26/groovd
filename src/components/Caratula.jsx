import { ICONO_TIPO } from '../data/iconos.js'

export default function Caratula({ contenido }) {
  return (
    <div className="portada" style={{ background: 'var(--color-primario)' }} aria-hidden="true">
      {ICONO_TIPO[contenido.tipo]}
    </div>
  )
}