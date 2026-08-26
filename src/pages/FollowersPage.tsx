import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { NexaLogo } from '../components/NexaLogo'
import { SideNav } from '../components/SideNav'
import { followUsers, type FollowStatus } from '../data/followers'
import './FollowersPage.css'

type Tab = 'followers' | 'following'

const STATUS_LABEL: Record<FollowStatus, string> = {
  follow: 'Seguir',
  following: 'Siguiendo',
  pending: 'Pendiente',
}

function nextStatus(status: FollowStatus): FollowStatus {
  if (status === 'follow') return 'following'
  if (status === 'following') return 'follow'
  return 'follow'
}

export function FollowersPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tab: Tab =
    searchParams.get('tab') === 'following' ? 'following' : 'followers'
  const [query, setQuery] = useState('')
  const [statuses, setStatuses] = useState<Record<string, FollowStatus>>(() =>
    Object.fromEntries(followUsers.map((user) => [user.id, user.status])),
  )

  const users = useMemo(() => {
    const q = query.trim().toLowerCase()
    return followUsers.filter((user) => {
      if (user.list !== tab) return false
      if (!q) return true
      return (
        user.name.toLowerCase().includes(q) ||
        user.handle.toLowerCase().includes(q) ||
        user.bio.toLowerCase().includes(q)
      )
    })
  }, [query, tab])

  function setTab(next: Tab) {
    setSearchParams(next === 'following' ? { tab: 'following' } : {})
  }

  return (
    <div className="followers-page">
      <SideNav />

      <header className="followers-topbar">
        <button type="button" aria-label="Buscar">
          <Icon name="search" size={24} />
        </button>
        <NexaLogo size="sm" className="followers-topbar__logo" />
        <Link to="/settings" aria-label="Ajustes">
          <Icon name="settings" size={24} />
        </Link>
      </header>

      <main className="followers-main">
        <div className="followers-sticky">
          <div className="followers-title">
            <Link to="/profile" className="followers-back" aria-label="Volver al perfil">
              <Icon name="arrow_back" />
            </Link>
            <h2>Elena R.</h2>
          </div>

          <div className="followers-search">
            <Icon name="search" className="followers-search__icon" />
            <input
              type="search"
              placeholder="Buscar usuarios..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="followers-tabs">
            <button
              type="button"
              className={tab === 'followers' ? 'is-active' : undefined}
              onClick={() => setTab('followers')}
            >
              Seguidores (1.2k)
            </button>
            <button
              type="button"
              className={tab === 'following' ? 'is-active' : undefined}
              onClick={() => setTab('following')}
            >
              Siguiendo (854)
            </button>
          </div>
        </div>

        <div className="followers-list">
          {users.length === 0 ? (
            <p className="followers-empty">No se encontraron usuarios.</p>
          ) : (
            users.map((user) => {
              const status = statuses[user.id] ?? user.status
              return (
                <article key={user.id} className="followers-card">
                  <div className="followers-card__user">
                    {user.avatar ? (
                      <img src={user.avatar} alt="" />
                    ) : (
                      <div className="followers-card__initials">{user.initials}</div>
                    )}
                    <div>
                      <div className="followers-card__name">
                        <span>{user.name}</span>
                        {user.verified ? (
                          <Icon name="verified" filled size={16} />
                        ) : null}
                      </div>
                      <span className="followers-card__handle">{user.handle}</span>
                      <p>{user.bio}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className={`followers-card__action followers-card__action--${status}`}
                    onClick={() =>
                      setStatuses((prev) => ({
                        ...prev,
                        [user.id]: nextStatus(status),
                      }))
                    }
                  >
                    {STATUS_LABEL[status]}
                  </button>
                </article>
              )
            })
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
