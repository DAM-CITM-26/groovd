import { Outlet } from 'react-router-dom'
import BarraPestanas from '../components/BarraPestanas.jsx'

export default function Layout() {
  return (
    <>
      <header className="cabecera">
        <h1>Groovd</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <BarraPestanas />
    </>
  )
}