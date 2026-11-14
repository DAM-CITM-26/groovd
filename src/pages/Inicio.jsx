import { useState } from 'react'
import { CONTENIDOS } from '../data/contenidos.js'
import { masEscuchados, filtrarPorTipo } from '../utils/contenidos.js'
import CarruselPopular from '../components/CarruselPopular.jsx'
import ListaContenidos from '../components/ListaContenidos.jsx'
import Chips from '../components/Chips.jsx'

export default function Inicio() {
  const [tipo, setTipo] = useState('Todo')

  return (
    <>
      <section className="seccion">
        <h2>Popular this week</h2>
        <CarruselPopular contenidos={masEscuchados(CONTENIDOS, 5)} />
      </section>
      <section className="seccion stack">
        <h2>Todo lo de la semana</h2>
        <Chips opciones={['Todo', 'Canción', 'Álbum', 'Podcast']} valor={tipo} onCambio={setTipo} />
        <ListaContenidos
          contenidos={filtrarPorTipo(masEscuchados(CONTENIDOS, CONTENIDOS.length), tipo)}
          vacio="No hay nada de este tipo esta semana."
        />
      </section>
    </>
  )
}