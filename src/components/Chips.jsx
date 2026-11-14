export default function Chips({ opciones, valor, onCambio }) {
  const botones = opciones.map((opcion) => (
    <button
      key={opcion}
      type="button"
      className={opcion === valor ? 'chip activo' : 'chip'}
      aria-pressed={opcion === valor}
      onClick={() => onCambio(opcion)}
    >
      {opcion}
    </button>
  ))

  return <div className="chips">{botones}</div>
}