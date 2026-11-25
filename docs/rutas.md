# Rutas

La app usa React Router. Todas las rutas están dentro de una ruta padre con el `Layout`, que pinta lo que se repite en todas las pantallas (la cabecera y la barra de pestañas) y, en su `<Outlet />`, la pantalla de la dirección.

## Árbol de rutas

```
<BrowserRouter>                         main.jsx
└── <Routes>                            App.jsx
    └── <Route element={<Layout />}>    cabecera + <Outlet /> + BarraPestanas
        ├── index            →  Inicio         /
        ├── buscar           →  Buscar         /buscar
        ├── contenido/:id    →  Contenido      /contenido/7
        └── *                →  NoEncontrado   cualquier otra dirección
```


## Cada ruta

| Dirección | Pantalla | Pestaña marcada | Qué hace |
|---|---|---|---|
| `/` | `pages/Inicio.jsx` | Inicio | Lo más popular y la lista por tipo |
| `/buscar` | `pages/Buscar.jsx` | Buscar | Buscador (Sprint 2, en curso) |
| `/contenido/:id` | `pages/Contenido.jsx` | — | Ficha de un contenido; el `id` se lee con `useParams` (llega como texto) |
| `*` | `pages/NoEncontrado.jsx` | — | «Esta página no existe.» y enlace para volver al inicio |

## Cómo se navega

- **Barra de pestañas** (`components/BarraPestanas.jsx`): un `NavLink` por sección. `NavLink` da `isActive` y se usa para poner la clase `activa` del CSS. Inicio lleva `end` para no marcarse en las demás direcciones.
- **Enlaces dentro de la app:** `Link` (por ejemplo, «Volver al inicio»). Cambian de pantalla sin recargar.
- **En la referencia** las direcciones llevaban `#` (`#/buscar`) y `app.js` elegía la pantalla a mano; aquí lo hace React Router.