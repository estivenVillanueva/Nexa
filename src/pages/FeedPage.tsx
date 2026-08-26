import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { PostCard } from '../components/PostCard'
import { posts } from '../data/posts'
import './FeedPage.css'

const NAV: { to: string; label: string; icon: string; active?: boolean }[] = [
  { to: '/feed', label: 'Home', icon: 'home', active: true },
  { to: '/explore', label: 'Explore', icon: 'search' },
  { to: '/notifications', label: 'Notifications', icon: 'notifications' },
  { to: '/inbox', label: 'Messages', icon: 'mail' },
  { to: '/create', label: 'Create', icon: 'add_box' },
  { to: '/profile', label: 'Profile', icon: 'person' },
]

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDA3d-F5XFcl2LpvPhwCwDxRGUFrh7H8J7eNJ4F92S4PTEUQl6M4qWk9cMXYpJPZ6sSBPMuQojUmHIoqXDA291YbMsJWP_0kPlj8GTN9y8EaypiuEGf6lc6rlyWTI9FICl54unu3rEKrSiiBef9cqm6GJzJPuK_9D3pLWB-RjpQdYvRK-S0YC7IdPQfLqh9vyanTvi9k3fdVH3rfLs5eut8BC5xG45dz100gjDgLBLBRVrpTlBw4Oaz'

export function FeedPage() {
  return (
    <div className="feed-page">
      <aside className="feed-sidebar">
        <div className="feed-sidebar__brand">Nexa</div>
        <div className="feed-sidebar__user">
          <img src={AVATAR} alt="" />
          <div>
            <strong>Nexa User</strong>
            <span>@nexa_user</span>
          </div>
        </div>
        <ul>
          {NAV.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={item.active ? 'is-active' : undefined}
              >
                <Icon name={item.icon} filled={item.active} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

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
