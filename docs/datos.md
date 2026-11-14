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
