import { CONTENIDOS } from '../data/contenidos.js'
import { masEscuchados } from '../utils/contenidos.js'
import CarruselPopular from '../components/CarruselPopular.jsx'
import ListaContenidos from '../components/ListaContenidos.jsx'

export default function Inicio() {
  return (
    <>
      <section className="seccion">
        <h2>Popular this week</h2>
        <CarruselPopular contenidos={masEscuchados(CONTENIDOS, 5)} />
      </section>
      <section className="seccion stack">
        <h2>Todo lo de la semana</h2>
        <ListaContenidos
          contenidos={masEscuchados(CONTENIDOS, CONTENIDOS.length)}
          vacio="No hay nada de este tipo esta semana."
        />
      </section>
    </>
  )
}