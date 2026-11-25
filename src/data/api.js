// API · las únicas llamadas a fetch de la app.
// Pide los datos a iTunes (sin clave) y los adapta a nuestros nombres (docs/datos.md),
// para que las pantallas no sepan cómo responde iTunes.

const ITUNES = 'https://itunes.apple.com'
const TOPS = `${ITUNES}/es/rss`

// Un elemento del top de iTunes → un contenido con nuestros nombres
function adaptarDelTop(entry, puesto, tipo) {
  const imagenes = entry['im:image']
  return {
    id: entry.id.attributes['im:id'],
    titulo: entry['im:name'].label,
    artista: entry['im:artist'].label,
    tipo,
    anio: Number(entry['im:releaseDate'].label.slice(0, 4)),
    genero: entry.category.attributes.label,
    imagen: imagenes[imagenes.length - 1].label,
    puesto,
  }
}

// Pide un top (topsongs, topalbums o toppodcasts) y lo devuelve adaptado.
// Si iTunes responde con error, lanza un Error: lo atrapa el hook con try/catch.
async function pedirTop(feed, tipo) {
  const respuesta = await fetch(`${TOPS}/${feed}/limit=10/json`)
  if (!respuesta.ok) throw new Error('No se han podido cargar los populares')
  const datos = await respuesta.json()
  return datos.feed.entry.map((entry, i) => adaptarDelTop(entry, i + 1, tipo))
}

// Lo más popular de la semana: los 10 primeros de cada tipo
export async function pedirPopulares() {
  const canciones = await pedirTop('topsongs', 'Canción')
  const albumes = await pedirTop('topalbums', 'Álbum')
  const podcasts = await pedirTop('toppodcasts', 'Podcast')
  return [...canciones, ...albumes, ...podcasts]
}

// Un resultado de /lookup o /search de iTunes → un contenido con nuestros nombres.
// Canciones y podcasts llegan como «track»; los álbumes, como «collection».
function adaptarDeItunes(resultado) {
  let tipo = 'Canción'
  if (resultado.collectionType === 'Album') tipo = 'Álbum'
  if (resultado.kind === 'podcast') tipo = 'Podcast'
  return {
    id: String(resultado.trackId ?? resultado.collectionId),
    titulo: resultado.trackName ?? resultado.collectionName,
    artista: resultado.artistName,
    tipo,
    anio: Number(resultado.releaseDate.slice(0, 4)),
    genero: resultado.primaryGenreName,
    imagen: resultado.artworkUrl100,
  }
}

// Un contenido por su id (el de la dirección /contenido/:id).
// Devuelve null si no existe; lanza un Error si iTunes falla.
export async function pedirContenido(id) {
  const respuesta = await fetch(`${ITUNES}/lookup?id=${id}&country=es`)
  if (respuesta.status === 400) return null
  if (!respuesta.ok) throw new Error('No se ha podido cargar el contenido')
  const datos = await respuesta.json()
  if (datos.resultCount === 0) return null
  return adaptarDeItunes(datos.results[0])
}