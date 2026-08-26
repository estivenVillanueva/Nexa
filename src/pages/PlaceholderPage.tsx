import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import './PlaceholderPage.css'

type Props = {
  title: string
}

export function PlaceholderPage({ title }: Props) {
  return (
    <div className="placeholder-page">
      <header>
        <h1>{title}</h1>
        <p>Pantalla lista para conectar con el diseño de Stitch.</p>
        <Link to="/feed">Volver al feed</Link>
      </header>
      <BottomNav />
    </div>
  )
}
