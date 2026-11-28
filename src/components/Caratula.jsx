export default function Caratula({ contenido }) {
  return (
    <div className="portada fondo-primario" aria-hidden="true">
      <img src={contenido.imagen} alt="" />
    </div>
  )
}