// LÓGICA de la pantalla de Inicio: funciones puras (reciben datos y devuelven datos).
// No tienen useState ni JSX y nunca modifican lo que reciben.
// Vienen de js/logica.js de la referencia.

// Copia ordenada de más a menos escuchas, y solo las n primeras
export function masEscuchados(contenidos, n) {
  return [...contenidos].sort((a, b) => b.escuchasSemana - a.escuchasSemana).slice(0, n)
}

// 'Todo' no filtra
export function filtrarPorTipo(contenidos, tipo) {
  if (tipo === 'Todo') return contenidos
  return contenidos.filter((contenido) => contenido.tipo === tipo)
}

// 182000 → '182 mil'
export function escuchasCortas(numero) {
  return `${Math.round(numero / 1000)} mil`
}