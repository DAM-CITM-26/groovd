export default function ErrorCarga({ mensaje, onReintentar }) {
  return (
    <div className="vacio" role="alert">
      <p className="icono" aria-hidden="true">⚠️</p>
      <p>{mensaje}</p>
      <button type="button" className="btn" onClick={onReintentar}>
        Reintentar
      </button>
    </div>
  )
}