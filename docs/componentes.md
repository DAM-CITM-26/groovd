## Inicio (Sprint 1, con la API en el Sprint 2)

La pantalla principal: el carrusel «Popular this week» con los 5 contenidos más populares y «Todo lo de la semana», con chips por tipo y la lista filtrada. Desde el Sprint 2, los datos llegan de iTunes con el hook `usePopulares`.

| En la referencia (js/componentes.js)     | En React                           | Nivel     | Props en React                       |
|------------------------------------------|------------------------------------|-----------|--------------------------------------|
| EtiquetaTipo({ tipo })                   | components/EtiquetaTipo.jsx        | Átomo     | tipo                                 |
| Caratula({ contenido })                  | components/Caratula.jsx            | Átomo     | contenido (enseña `contenido.imagen`) |
| Vacio({ icono, texto })                  | components/Vacio.jsx               | Átomo     | icono, texto                         |
| TarjetaPopular({ contenido, puesto })    | components/TarjetaPopular.jsx      | Molécula  | contenido, puesto (posición en el carrusel) |
| FilaContenido({ contenido })             | components/FilaContenido.jsx       | Molécula  | contenido (artista · género · año)   |
| Chips({ nombre, opciones, valor })       | components/Chips.jsx               | Molécula  | opciones, valor, onCambio            |
| CarruselPopular({ contenidos })          | components/CarruselPopular.jsx     | Organismo | contenidos                           |
| ListaContenidos({ contenidos, vacio })   | components/ListaContenidos.jsx     | Organismo | contenidos, vacio                    |
| PantallaInicio({ estado })               | pages/Inicio.jsx                   | Pantalla  | —                                    |
| estado.tipo                              | useState en Inicio ('Todo')        | Estado    | baja a Chips como valor + onCambio   |
| CONTENIDOS y su carga                    | hooks/usePopulares.js              | Hook      | devuelve { contenidos, cargando, error, reintentar } |
| masEscuchados, filtrarPorTipo (js/logica.js) | utils/contenidos.js: masPopulares, filtrarPorTipo | Lógica | — |
| CONTENIDOS (js/datos.js)                 | data/api.js · pedirPopulares()     | Datos     | —                                    |
| ICONO_TIPO (js/componentes.js)           | data/iconos.js                     | Datos     | —                                    |

## Cómo encajan

- Inicio (pantalla, guarda el estado `tipo` y llama a `usePopulares()`)
  - si carga → Cargando (átomo)
  - si falla → ErrorCarga (molécula), con Reintentar
  - si no:
    - CarruselPopular (organismo) → TarjetaPopular (molécula) → Caratula (átomo)
    - Chips (molécula, controlado: recibe `valor` y avisa con `onCambio`)
    - ListaContenidos (organismo) → FilaContenido (molécula) → EtiquetaTipo (átomo)
      - Vacio (átomo), si no hay contenidos de ese tipo
## Orden de construcción

1. Lógica: `utils/contenidos.js`
2. Átomos: EtiquetaTipo, Caratula, Vacio
3. Moléculas: TarjetaPopular, FilaContenido, Chips
4. Organismos: CarruselPopular, ListaContenidos
5. Pantalla: Inicio, con la lista y después el estado

## Navegación (Sprint 2)

Lo que comparten todas las pantallas. El árbol de rutas está en `docs/rutas.md`.

| En la referencia                          | En React                          | Nivel     | Props en React |
|-------------------------------------------|-----------------------------------|-----------|----------------|
| `<nav class="pestanas">` (index.html)     | components/BarraPestanas.jsx      | Organismo | —              |
| cabecera + `<main id="app">` (index.html) | pages/Layout.jsx                  | Pantalla  | —              |
| PantallaBuscar({ estado })                | pages/Buscar.jsx (provisional)    | Pantalla  | —              |
| PantallaContenido({ estado, id })         | pages/Contenido.jsx               | Pantalla  | — (el id, con useParams) |
| PantallaNoEncontrada()                    | pages/NoEncontrado.jsx            | Pantalla  | —              |
| RUTAS y el `#` de la dirección (app.js)   | App.jsx con Routes y Route        | Rutas     | —              |

- Layout (cabecera + Outlet + BarraPestanas)
  - BarraPestanas (organismo): NavLink a Inicio y Buscar
  - Outlet: Inicio, Buscar, Contenido o NoEncontrado, según la dirección
- NoEncontrado reutiliza Vacio (átomo) y un Link para volver al inicio

## Estados de carga (Sprint 2)

Los tres estados de los datos, iguales en todas las pantallas que piden a la API:

| Estado | Componente | Nivel | Props |
|---|---|---|---|
| Cargando | components/Cargando.jsx | Átomo | texto (opcional) |
| Error | components/ErrorCarga.jsx | Molécula | mensaje, onReintentar |
| Sin resultados | components/Vacio.jsx (ya existía) | Átomo | icono, texto |

## Ficha del contenido (Sprint 2)

| En la referencia | En React | Nivel | Qué hace |
|---|---|---|---|
| `CONTENIDOS.find(…)` en PantallaContenido | hooks/useContenido.js | Hook | Pide el contenido con `pedirContenido(id)` y devuelve `{ contenido, cargando, error, reintentar }` |
| PantallaContenido({ estado, id }) | pages/Contenido.jsx | Pantalla | Solo pinta: Cargando, ErrorCarga, NoEncontrado o la ficha |

- Contenido (pantalla): lee el id con `useParams` y llama a `useContenido(id)`
  - si carga → Cargando (átomo)
  - si falla → ErrorCarga (molécula), con Reintentar
  - si no existe → NoEncontrado (pantalla, reutilizada)
  - si no → título, Caratula (átomo), EtiquetaTipo (átomo), artista · año y género