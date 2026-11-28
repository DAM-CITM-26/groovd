import { useEffect, useState } from 'react'
import { pedirPopulares } from '../data/api.js'

// Los populares de la semana, los pide a la API y avisa de si carga, falla o no existe.
export function usePopulares() {
  const [contenidos, setContenidos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let activo = true

    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const populares = await pedirPopulares()
        if (activo) setContenidos(populares)
      } catch (e) {
        if (activo) setError('No se han podido cargar los populares. Comprueba la conexión.')
      } finally {
        if (activo) setCargando(false)
      }
    }

    cargar()
    return () => {
      activo = false
    }
  }, [intento])

  function reintentar() {
    setIntento((n) => n + 1)
  }

  return { contenidos, cargando, error, reintentar }
}