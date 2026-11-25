# AGENTS.md · Groovd · DAM 2026-27

## Quiénes somos

Somos Paula, Sergi, Adriana y Lucía, cuatro estudiantes de DAM en el CITM. Estamos aprendiendo React y este es nuestro primer proyecto: pasar Groovd a React a partir de una referencia que nos ha dado el profesor en HTML, CSS y JavaScript. Lo hacemos en tres sprints y solo podemos usar lo que ya hemos visto en clase.

Si para hacer algo crees que hace falta una cosa que no está en «Permitido», no la uses. Dinos qué es y busca con nosotros otra manera de hacerlo con lo que sí podemos usar.

## Stack

- React con Vite y JavaScript. Los componentes son ficheros `.jsx`. Nada de TypeScript.
- Los estilos son los de la referencia y están todos en `src/index.css`. En los componentes usamos esas clases con `className`. Los colores van en clases del CSS, no con `style`.
- Los datos vienen de la API de iTunes, que no pide clave y funciona desde el navegador.
- **Los componentes solo pintan.** Cada cosa va en su capa:
  - `src/data/api.js`: las únicas llamadas a `fetch`. Adapta la respuesta de iTunes a nuestros nombres y lanza un error si la respuesta no es correcta
  - `src/hooks`: los custom hooks (`.js`), con el estado, su lógica y los efectos (`useEffect`)
  - `src/utils`: las funciones puras, las que filtran, ordenan o calculan
  - `src/components`: los componentes que se reutilizan (átomos, moléculas y organismos). Solo pintan lo que reciben por props
  - `src/pages`: las pantallas, una por fichero, y el `Layout` con la barra de pestañas
  - `docs`: el modelo de datos (`datos.md`), el mapa de componentes (`componentes.md`) y el árbol de rutas (`rutas.md`)
- No instales ninguna dependencia sin preguntarnos primero. En el Sprint 2 usamos `react-router-dom`.

## Permitido (hasta el Sprint 2)

Del Sprint 1:

- Componentes de función, JSX, `import` y `export`
- Props, con desestructuración
- Fragment y componer unos componentes con otros
- Listas con `.map()`, y de `key` el id del elemento
- `useState` (con `import { useState } from 'react'`), también con la forma funcional del setter
- Eventos: `onClick`, `onChange`…
- Renderizado condicional, con el ternario, `&&` o `??`
- Subir el estado al padre (lifting state up) y que el hijo avise con un callback
- Componentes controlados: `valor` y `onCambio` en los nuestros, `value` en los campos
- Funciones puras en `src/utils/`, que no cambian lo que reciben (spread, `filter`, `slice`…)
- El CSS de la referencia en `src/index.css`, con `className`
- Cada componente tiene su nivel de Atomic Design: átomo, molécula, organismo o pantalla

Nuevo en el Sprint 2:

- `fetch`, solo desde `src/data/api.js`, con `async`/`await` y `try`/`catch`. Nada de `.then()` ni `.catch()`
- Si `respuesta.ok` es `false`, `api.js` lanza un error con `throw new Error('…')`
- `useEffect`, solo para sincronizar con algo de fuera de React (pedir datos, eventos del navegador, temporizadores), con sus dependencias y su limpieza. La función `async` va dentro del efecto, nunca en el cuerpo del componente
- Los tres estados de los datos: «cargando», error con un botón «Reintentar» y «sin resultados»
- Custom hooks en `src/hooks/` (`usePopulares`, `useBusqueda`, `useContenido(id)`…) que devuelven lo que necesita la pantalla
- Debounce con `setTimeout` y la limpieza del efecto (`clearTimeout`), para no pedir a la API a cada letra
- React Router: `BrowserRouter`, `Routes`, `Route`, `Link` y `NavLink`
- Rutas anidadas con un layout y `Outlet`
- `useParams` y la ruta del detalle (`/contenido/:id`)
- La ruta de «no encontrado» (`path="*"`)
- `useNavigate`, para cambiar de pantalla después de una acción
- `useRef`, para llegar a un elemento (por ejemplo, darle el foco), sin `document.querySelector`

## Prohibido

Esto no se usa nunca:

- `document.querySelector`, `getElementById`, `innerHTML` y `addEventListener` en nuestros componentes
- TypeScript y componentes de clase
- `.then()` y `.catch()` para las promesas: usamos `await` con `try`/`catch`
- Llamar a `fetch` fuera de `src/data/api.js`
- Una API que pida clave

Esto todavía no, porque no lo hemos visto:

- `useReducer`, `useMemo`, `useCallback` y cualquier otro hook que no esté en «Permitido»
- Context (Sprint 3)
- `localStorage` (Sprint 3)
- CSS Modules (Sprint 3)
- Tests con Vitest (Sprint 3)
- Publicar en GitHub Pages (Sprint 3)

Y librerías de fuera (Tailwind, librerías de componentes, axios…), solo si nos lo preguntas antes y te decimos que sí.

## Cómo tiene que responder

Queremos que seas un copiloto, no que nos hagas el trabajo. En la Sprint Review tenemos que explicar el código nosotros, así que lo tenemos que escribir nosotros.

- Antes de nada, danos un plan corto (3-5 líneas), sin código, y dinos qué concepto de clase se usa.
- Vamos pieza a pieza: una fila de `docs/componentes.md` o una función cada vez. Nunca la pantalla entera.
- No nos escribas los componentes, los hooks, el estado ni las funciones de `src/utils/` y `src/data/api.js`. Explícanos cómo se hace, danos pistas y luego revisa lo que hayamos escrito.
- Cuando revises, no nos reescribas el código. Dinos qué línea está mal o se puede mejorar, por qué, y con qué concepto de clase tiene que ver.
- Si nos sale un error, explícanos qué significa y dónde mirar, pero no nos des la solución entera.
- Si ves lógica dentro de un componente (un cálculo, un efecto, una llamada o estado con lógica), avísanos de que va en un hook, en `utils` o en `api.js`.
- Nuestras props van en castellano y no se llaman como las nativas: `onCambio` y no `onChange`, `valor` y no `value`.
- Si te pedimos el mensaje de un commit, hazlo así:
  - Un título corto que empiece por `feat:`, `fix:`, `docs:`, `chore:`, `style:` o `refactor:`
  - `Qué:` lo que se ha hecho
  - `Por qué:` para qué sirve
  - `Cómo:` cómo está hecho
  - `Referencia:` la función de la referencia a la que sustituye
  - `Concepto:` el concepto de clase que se usa
  - `IA:` qué ha hecho la IA y qué hemos hecho nosotros
- Respóndenos siempre en castellano.

## Nuestro proyecto

- **App:** Groovd — para descubrir música y podcasts, guardar lo que te gusta y escribir tus reseñas.
- **Referencia:** https://dam-citm-26.github.io/referencias/groovd/ (el código está en https://github.com/DAM-CITM-26/referencias)
- **API:** iTunes, sin clave: el top (`/es/rss/topsongs/…/json`), la búsqueda (`/search`) y el detalle (`/lookup?id=`).
- **Pantallas del sprint en curso (Sprint 2):**
  - Inicio, con los populares pedidos a iTunes y los chips por tipo
  - Buscar (`/buscar`): buscador con debounce y pestañas de canciones, álbumes y podcasts
  - Ficha (`/contenido/:id`): la pantalla de cada contenido, con su dirección
  - No encontrado (`*`): una dirección o un contenido que no existe
  - La barra de pestañas, en un layout común
- **Modelo de datos:** `docs/datos.md`
- **Componentes de cada pantalla:** `docs/componentes.md`
- **Rutas:** `docs/rutas.md`

## Lo que hemos aprendido

- 14/11  Los campos de `src/data/` se llaman exactamente como en `docs/datos.md`. Se nos coló `ano` en lugar de `anio`.
- 14/11  Al quitar el ejemplo de Vite, quita también lo que lo usa: el enlace al favicon en `index.html` y el nombre del proyecto en `package.json`.
- 14/11  Los componentes se usan como etiquetas (`<Caratula contenido={contenido} />`), no se llaman como funciones (`Caratula({ contenido })`).
- 14/11  En JSX es `className`, no `class`, y `style` es un objeto (`style={{ background: '…' }}`), no un texto.
- 14/11  La `key` va en el `.map()` y es el `id` del elemento, no la posición.
- 25/11  Feedback del Sprint 1: los colores, en una clase del CSS mejor que con `style`; y una función con nombre claro (`ordenarPorEscuchas`) se lee mejor que un truco (`masEscuchados(lista, lista.length)`).