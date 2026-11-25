# Modelo de datos

## Contenido

Una canción, un álbum o un podcast. Es lo que muestra la pantalla de Inicio (en el carrusel y en la lista). En el Sprint 2, la API tendrá que devolver elementos con estos campos.

| Campo           | Tipo   | Ejemplo          | Para qué                                              |
|-----------------|--------|------------------|-------------------------------------------------------|
| id              | número | 1                | Identifica el contenido; es la `key` de las listas    |
| titulo          | texto  | "Luz de agosto"  | El nombre de la canción, el álbum o el podcast        |
| artista         | texto  | "Marea Baja"     | Quién lo hace                                         |
| tipo            | texto  | "Canción"        | Uno de estos: "Canción", "Álbum" o "Podcast"          |
| anio            | número | 2026             | Año de publicación                                    |
| escuchasSemana  | número | 182000           | Escuchas de esta semana; ordena «Popular this week»   |

### Ejemplo en JSON

```json
{
  "id": 1,
  "titulo": "Luz de agosto",
  "artista": "Marea Baja",
  "tipo": "Canción",
  "anio": 2026,
  "escuchasSemana": 182000
}
```

## Iconos por tipo

Cada tipo de contenido tiene su emoji, que se usa en la carátula, en la fila y en la etiqueta.

| tipo     | icono |
|----------|-------|
| Canción  | 🎵    |
| Álbum    | 💿    |
| Podcast  | 🎙️    |

## De dónde vienen los datos (Sprint 2)

Desde el Sprint 2 los contenidos ya no están escritos en el código: se piden a la API de iTunes (sin clave y con CORS abierto) desde `src/data/api.js`, que los adapta a nuestros nombres.

| Para qué | Dirección |
|---|---|
| Canciones más escuchadas | `https://itunes.apple.com/es/rss/topsongs/limit=10/json` |
| Álbumes más escuchados | `https://itunes.apple.com/es/rss/topalbums/limit=10/json` |
| Podcasts más escuchados | `https://itunes.apple.com/es/rss/toppodcasts/limit=10/json` |

La lista está en `feed.entry`. Cada elemento se adapta así:

| Nuestro campo | Tipo | De dónde sale en iTunes | Ejemplo |
|---|---|---|---|
| id | texto | `entry.id.attributes['im:id']` | "6810810195" |
| titulo | texto | `entry['im:name'].label` | "Bonito, Bonito" |
| artista | texto | `entry['im:artist'].label` | "Thiago Navarro Music" |
| tipo | texto | según el top que se pide | "Canción", "Álbum" o "Podcast" |
| anio | número | los 4 primeros caracteres de `entry['im:releaseDate'].label` | 2026 |
| genero | texto | `entry.category.attributes.label` | "Pop en español" |
| imagen | texto (URL) | la última de `entry['im:image']` (170×170) | "https://is1-ssl.mzstatic.com/…/170x170bb.png" |
| puesto | número | la posición en el top (1 a 10) | 1 |

**Cambios respecto al Sprint 1:**
- `escuchasSemana` desaparece: iTunes no da las escuchas. En su lugar, `puesto` (para ordenar lo más popular) y `genero`.
- `id` pasa a ser texto, como el que llega en la dirección con `useParams`.
- Nuevo `imagen`: la carátula de verdad.
