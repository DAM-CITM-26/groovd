import Caratula from './Caratula.jsx'

export default function TarjetaPopular({ contenido, puesto }) {
  return (
    <article className="card">
      <Caratula contenido={contenido} />
      <div className="card-cuerpo">
        <p className="card-meta">#{puesto} esta semana</p>
        <h3>{contenido.titulo}</h3>
        <p className="card-meta">{contenido.artista}</p>
      </div>
    </article>
  )
}