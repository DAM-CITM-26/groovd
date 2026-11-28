import { useState } from 'react'
import { masPopulares, filtrarPorTipo } from '../utils/contenidos.js'
import CarruselPopular from '../components/CarruselPopular.jsx'
import ListaContenidos from '../components/ListaContenidos.jsx'
import Chips from '../components/Chips.jsx'
import { usePopulares } from '../hooks/usePopulares.js'
import Cargando from '../components/Cargando.jsx'
import ErrorCarga from '../components/ErrorCarga.jsx'

export default function Inicio() {
  const [tipo, setTipo] = useState('Todo')
  const { contenidos, cargando, error, reintentar } = usePopulares()
  if (cargando) return <Cargando />
  if (error) return <ErrorCarga mensaje={error} onReintentar={reintentar} />

  return (
    <>
      <section className="seccion">
        <h2>Popular this week</h2>
        <CarruselPopular contenidos={masPopulares(contenidos, 5)} />
      </section>
      <section className="seccion stack">
        <h2>Todo lo de la semana</h2>
        <Chips opciones={['Todo', 'Canción', 'Álbum', 'Podcast']} valor={tipo} onCambio={setTipo} />
        <ListaContenidos
          contenidos={filtrarPorTipo(masPopulares(contenidos), tipo)}
          vacio="No hay nada de este tipo esta semana."
        />
      </section>
    </>
  )
}