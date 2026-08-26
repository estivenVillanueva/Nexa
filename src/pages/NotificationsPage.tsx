import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { SideNav } from '../components/SideNav'
import {
  notificationFilters,
  notifications,
  type NotificationFilter,
  type NotificationItem,
} from '../data/notifications'
import './NotificationsPage.css'

function badgeIcon(type: NotificationItem['type']) {
  switch (type) {
    case 'like':
      return 'favorite'
    case 'follow':
      return 'person_add'
    case 'comment':
    case 'mention':
      return 'chat_bubble'
  }
}

function matchesFilter(item: NotificationItem, filter: NotificationFilter) {
  if (filter === 'Todas') return true
  if (filter === 'Likes') return item.type === 'like'
  if (filter === 'Nuevos seguidores') return item.type === 'follow'
  if (filter === 'Menciones') return item.type === 'mention' || item.type === 'comment'
  return true
}

export function NotificationsPage() {
  const [filter, setFilter] = useState<NotificationFilter>('Todas')
  const [followingBack, setFollowingBack] = useState<Record<string, boolean>>({})

  const items = useMemo(
    () => notifications.filter((item) => matchesFilter(item, filter)),
    [filter],
  )

  return (
    <div className="notifications-page">
      <SideNav />

      <header className="notifications-topbar">
        <button type="button" aria-label="Buscar">
          <Icon name="search" size={24} />
        </button>
        <span>Nexa</span>
        <Link to="/settings" aria-label="Ajustes">
          <Icon name="settings" size={24} />
        </Link>
      </header>

      <main className="notifications-main">
        <div className="notifications-inner">
          <h1>Notificaciones</h1>

          <div className="notifications-filters hide-scrollbar">
            {notificationFilters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? 'is-active' : undefined}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="notifications-list">
            {items.length === 0 ? (
              <p className="notifications-empty">No hay notificaciones en este filtro.</p>
            ) : (
              items.map((item) => (
                <article
                  key={item.id}
                  className={`notifications-item${item.unread ? ' is-unread' : ''}`}
                >
                  {item.unread ? <span className="notifications-item__bar" aria-hidden /> : null}

                  <div className="notifications-item__avatar">
                    <img
                      src={item.avatar}
                      alt=""
                      className={item.unread ? undefined : 'is-muted'}
                    />
                    <span
                      className={`notifications-item__badge notifications-item__badge--${item.type}`}
                    >
                      <Icon name={badgeIcon(item.type)} filled size={14} />
                    </span>
                  </div>

                  <div className="notifications-item__content">
                    <p>
                      <strong>{item.name}</strong> {item.message}
                    </p>
                    <time>{item.time}</time>

                    {item.type === 'follow' ? (
                      <button
                        type="button"
                        className={`notifications-item__follow${
                          followingBack[item.id] ? ' is-following' : ''
                        }`}
                        onClick={() =>
                          setFollowingBack((prev) => ({
                            ...prev,
                            [item.id]: !prev[item.id],
                          }))
                        }
                      >
                        {followingBack[item.id] ? 'Siguiendo' : 'Seguir también'}
                      </button>
                    ) : null}

                    {item.commentPreview ? (
                      <blockquote>“{item.commentPreview}”</blockquote>
                    ) : null}
                  </div>

                  {item.previewImage ? (
                    <img
                      className="notifications-item__preview"
                      src={item.previewImage}
                      alt=""
                    />
                  ) : null}
                </article>
              ))
            )}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  )
}
