import { useState } from 'react'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { SideNav } from '../components/SideNav'
import {
  popularPosts,
  suggestedPeople,
  trends,
} from '../data/explore'
import './ExplorePage.css'

export function ExplorePage() {
  const [query, setQuery] = useState('')
  const [activeTrend, setActiveTrend] = useState('#DesignSystem')
  const [connected, setConnected] = useState<Record<string, boolean>>({})

  return (
    <div className="explore-page">
      <SideNav />

      <header className="explore-topbar">
        <button type="button" aria-label="Buscar">
          <Icon name="search" size={24} />
        </button>
        <span>Nexa</span>
        <button type="button" aria-label="Ajustes">
          <Icon name="settings" size={24} />
        </button>
      </header>

      <main className="explore-main">
        <div className="explore-search">
          <Icon name="search" className="explore-search__icon" />
          <input
            type="search"
            placeholder="Buscar temas, personas, etiquetas..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <section className="explore-section">
          <h2>Tendencias</h2>
          <div className="explore-trends">
            {trends.map((item) => (
              <button
                key={item.tag}
                type="button"
                className={activeTrend === item.tag ? 'is-active' : undefined}
                onClick={() => setActiveTrend(item.tag)}
              >
                {item.tag}
              </button>
            ))}
          </div>
        </section>

        <section className="explore-section">
          <h2>Personas que quizá conozcas</h2>
          <div className="explore-people hide-scrollbar">
            {suggestedPeople.map((person) =>
              person.more ? (
                <button key={person.id} type="button" className="explore-person explore-person--more">
                  <div className="explore-person__more-avatar">
                    <Icon name="more_horiz" size={32} />
                  </div>
                  <h3>{person.name}</h3>
                </button>
              ) : (
                <article key={person.id} className="explore-person">
                  <img src={person.avatar} alt="" />
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                  <button
                    type="button"
                    className={connected[person.id] ? 'is-connected' : undefined}
                    onClick={() =>
                      setConnected((prev) => ({
                        ...prev,
                        [person.id]: !prev[person.id],
                      }))
                    }
                  >
                    {connected[person.id] ? 'Conectado' : 'Conectar'}
                  </button>
                </article>
              ),
            )}
          </div>
        </section>

        <section className="explore-section">
          <h2>Publicaciones populares</h2>
          <div className="explore-masonry">
            {popularPosts.map((post) =>
              post.type === 'quote' ? (
                <article key={post.id} className="explore-card">
                  <div className="explore-card__quote">
                    <h3>“{post.quote}”</h3>
                    <p>— {post.author}</p>
                  </div>
                  <div className="explore-card__stat">
                    <Icon name="comment" size={16} />
                    <span>{post.comments}</span>
                  </div>
                </article>
              ) : (
                <article key={post.id} className="explore-card">
                  <img src={post.image} alt="" />
                  <div className="explore-card__body">
                    <h3>{post.title}</h3>
                    {post.description ? <p>{post.description}</p> : null}
                    {post.likes ? (
                      <div className="explore-card__stat">
                        <Icon name="favorite" size={16} />
                        <span>{post.likes}</span>
                      </div>
                    ) : null}
                  </div>
                </article>
              ),
            )}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  )
}
