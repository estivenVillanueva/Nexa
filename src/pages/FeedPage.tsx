import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { PostCard } from '../components/PostCard'
import { SideNav } from '../components/SideNav'
import { posts } from '../data/posts'
import './FeedPage.css'

export function FeedPage() {
  return (
    <div className="feed-page">
      <SideNav />

      <header className="feed-topbar">
        <button type="button" aria-label="Buscar">
          <Icon name="search" size={24} />
        </button>
        <h1>Nexa</h1>
        <button type="button" aria-label="Ajustes">
          <Icon name="settings" size={24} />
        </button>
      </header>

      <main className="feed-main">
        <Link to="/create" className="feed-fab" aria-label="Crear publicación">
          <Icon name="edit" size={28} />
        </Link>

        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}

        <p className="feed-end">Estás al día.</p>
      </main>

      <BottomNav />
    </div>
  )
}
