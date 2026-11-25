import { useParams } from 'react-router-dom'

export default function Contenido() {
  const { id } = useParams()
  return <p>Contenido {id}</p>
}