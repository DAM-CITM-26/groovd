import TarjetaPopular from './TarjetaPopular.jsx'

export default function CarruselPopular({ contenidos }) {
  return (
    <div className="carrusel">
      {contenidos.map((contenido, i) => (
        <TarjetaPopular key={contenido.id} contenido={contenido} puesto={i + 1} />
      ))}
    </div>
  )
}