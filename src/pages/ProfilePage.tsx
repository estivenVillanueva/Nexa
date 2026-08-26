import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { SideNav } from '../components/SideNav'
import { profile, profilePosts } from '../data/profile'
import './ProfilePage.css'

const TABS = ['Publicaciones', 'Respuestas', 'Multimedia', 'Likes'] as const

export function ProfilePage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>('Publicaciones')

  return (
    <div className="profile-page">
      <SideNav />

      <div className="profile-page__content">
        <header className="profile-topbar">
          <button type="button" aria-label="Buscar">
            <Icon name="search" size={24} />
          </button>
          <span className="profile-topbar__mobile">Nexa</span>
          <span className="profile-topbar__desktop">Profile</span>
          <button type="button" aria-label="Ajustes">
            <Icon name="settings" size={24} />
          </button>
        </header>

        <main className="profile-main">
          <section className="profile-header">
            <div
              className="profile-header__banner"
              style={{ backgroundImage: `url('${profile.banner}')` }}
            />

            <div className="profile-header__body">
              <div className="profile-header__row">
                <div className="profile-header__avatar">
                  <img src={profile.avatar} alt="" />
                </div>
                <div className="profile-header__actions">
                  <button type="button" className="profile-btn">
                    Editar perfil
                  </button>
                  <button type="button" className="profile-btn profile-btn--icon" aria-label="Compartir">
                    <Icon name="share" size={20} />
                  </button>
                </div>
              </div>

              <h1>{profile.name}</h1>
              <p className="profile-header__handle">{profile.handle}</p>
              <p className="profile-header__bio">{profile.bio}</p>

              <div className="profile-header__meta">
                <span>
                  <Icon name="location_on" size={16} />
                  {profile.location}
                </span>
                <span>
                  <Icon name="link" size={16} />
                  <a href={profile.websiteUrl} target="_blank" rel="noreferrer">
                    {profile.website}
                  </a>
                </span>
                <span>
                  <Icon name="calendar_month" size={16} />
                  {profile.joined}
                </span>
              </div>

              <div className="profile-header__stats">
                <button type="button">
                  <strong>{profile.posts}</strong>
                  <span>Publicaciones</span>
                </button>
                <Link to="/followers">
                  <strong>{profile.followers}</strong>
                  <span>Seguidores</span>
                </Link>
                <Link to="/followers">
                  <strong>{profile.following}</strong>
                  <span>Siguiendo</span>
                </Link>
              </div>
            </div>
          </section>

          <div className="profile-tabs hide-scrollbar">
            {TABS.map((item) => (
              <button
                key={item}
                type="button"
                className={tab === item ? 'is-active' : undefined}
                onClick={() => setTab(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="profile-grid">
            {tab === 'Publicaciones'
              ? profilePosts.map((post) => (
                  <article key={post.id} className="profile-card">
                    <div className="profile-card__meta">
                      <img src={profile.avatar} alt="" />
                      <p>
                        {profile.name}{' '}
                        <span>
                          {profile.handle} · {post.time}
                        </span>
                      </p>
                    </div>
                    <p className="profile-card__content">{post.content}</p>
                    {post.image ? (
                      <div className="profile-card__image">
                        <img src={post.image} alt="" />
                      </div>
                    ) : null}
                    {post.tags?.length ? (
                      <div className="profile-card__tags">
                        {post.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))
              : (
                  <p className="profile-empty">No hay contenido en {tab.toLowerCase()} todavía.</p>
                )}
          </div>
        </main>
      </div>

      <BottomNav />
    </div>
  )
}
