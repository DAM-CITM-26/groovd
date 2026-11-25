import { useEffect, useState } from 'react'
import { pedirContenido } from '../data/api.js'

// El contenido de la ficha: lo pide a la API y avisa de si carga, falla o no existe.
export function useContenido(id) {
  const [contenido, setContenido] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let activo = true

    async function cargar() {
      setCargando(true)
      setError(null)
      try {
        const encontrado = await pedirContenido(id)
        if (activo) setContenido(encontrado)
      } catch (e) {
        if (activo) setError('No se ha podido cargar el contenido. Comprueba la conexión.')
      } finally {
        if (activo) setCargando(false)
      }
    }

    cargar()
    return () => {
      activo = false
    }
  }, [id, intento])

  function reintentar() {
    setIntento((n) => n + 1)
  }

  return { contenido, cargando, error, reintentar }
}