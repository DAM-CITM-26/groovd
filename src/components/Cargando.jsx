export default function Cargando({ texto }) {
  return (
    <div className="vacio" role="status">
      <p className="icono" aria-hidden="true">⏳</p>
      <p>{texto ?? 'Cargando…'}</p>
    </div>
  )
}