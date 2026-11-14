# Componentes de cada pantalla

## Inicio (Sprint 1)

La pantalla principal: el carrusel «Popular this week» con los 5 contenidos más escuchados y «Todo lo de la semana», con chips por tipo y la lista filtrada.

| En la referencia (js/componentes.js)     | En React                           | Nivel     | Props en React                       |
|------------------------------------------|------------------------------------|-----------|--------------------------------------|
| EtiquetaTipo({ tipo })                   | components/EtiquetaTipo.jsx        | Átomo     | tipo                                 |
| Caratula({ contenido })                  | components/Caratula.jsx            | Átomo     | contenido                            |
| Vacio({ icono, texto })                  | components/Vacio.jsx               | Átomo     | icono, texto                         |
| TarjetaPopular({ contenido, puesto })    | components/TarjetaPopular.jsx      | Molécula  | contenido, puesto                    |
| FilaContenido({ contenido })             | components/FilaContenido.jsx       | Molécula  | contenido                            |
| Chips({ nombre, opciones, valor })       | components/Chips.jsx               | Molécula  | opciones, valor, onCambio            |
| CarruselPopular({ contenidos })          | components/CarruselPopular.jsx     | Organismo | contenidos                           |
| ListaContenidos({ contenidos, vacio })   | components/ListaContenidos.jsx     | Organismo | contenidos, vacio                    |
| PantallaInicio({ estado })               | pages/Inicio.jsx                   | Pantalla  | —                                    |
| estado.tipo                              | useState en Inicio ('Todo')        | Estado    | baja a Chips como valor + onCambio   |
| masEscuchados, filtrarPorTipo, escuchasCortas (js/logica.js) | utils/contenidos.js | Lógica  | —                                    |
| CONTENIDOS (js/datos.js)                 | data/contenidos.js                 | Datos     | —                                    |
| ICONO_TIPO (js/componentes.js)           | data/iconos.js                     | Datos     | —                                    |

## Cómo encajan

- Inicio (pantalla, guarda el estado `tipo`)
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