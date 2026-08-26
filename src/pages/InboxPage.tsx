import { useEffect, useMemo, useRef, useState, type FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { SideNav } from '../components/SideNav'
import { conversations as seed, type ChatMessage, type Conversation } from '../data/inbox'
import './InboxPage.css'

export function InboxPage() {
  const { conversationId } = useParams()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [threads, setThreads] = useState<Conversation[]>(seed)
  const [draft, setDraft] = useState('')
  const endRef = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return threads
    return threads.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.handle.toLowerCase().includes(q) ||
        c.preview.toLowerCase().includes(q),
    )
  }, [query, threads])

  const active = threads.find((c) => c.id === conversationId) ?? null
  const chatOpen = Boolean(active)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [active?.id, active?.messages.length])

  function openChat(id: string) {
    setThreads((prev) =>
      prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)),
    )
    navigate(`/inbox/${id}`)
  }

  function sendMessage(event: FormEvent) {
    event.preventDefault()
    if (!active || !draft.trim()) return
    const message: ChatMessage = {
      id: `${active.id}-${Date.now()}`,
      fromMe: true,
      text: draft.trim(),
      time: 'Ahora',
    }
    setThreads((prev) =>
      prev.map((c) =>
        c.id === active.id
          ? {
              ...c,
              preview: message.text,
              time: 'Ahora',
              messages: [...c.messages, message],
            }
          : c,
      ),
    )
    setDraft('')
  }

  return (
    <div className={`inbox-page${chatOpen ? ' has-chat' : ''}`}>
      <SideNav />

      <aside className="inbox-list-panel">
        <header className="inbox-list-panel__header">
          <div className="inbox-list-panel__title">
            <h1>Mensajes</h1>
            <button type="button" aria-label="Nuevo mensaje" className="inbox-icon-btn">
              <Icon name="edit_square" size={22} />
            </button>
          </div>
          <div className="inbox-search">
            <Icon name="search" className="inbox-search__icon" />
            <input
              type="search"
              placeholder="Buscar conversaciones..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </header>

        <div className="inbox-conversations">
          {filtered.length === 0 ? (
            <p className="inbox-empty">No hay conversaciones.</p>
          ) : (
            filtered.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`inbox-conversation${active?.id === c.id ? ' is-active' : ''}${
                  c.unread ? ' is-unread' : ''
                }`}
                onClick={() => openChat(c.id)}
              >
                <div className="inbox-conversation__avatar">
                  <img src={c.avatar} alt="" />
                  {c.online ? <span className="inbox-online" aria-label="En línea" /> : null}
                </div>
                <div className="inbox-conversation__body">
                  <div className="inbox-conversation__row">
                    <strong>{c.name}</strong>
                    <time>{c.time}</time>
                  </div>
                  <div className="inbox-conversation__row">
                    <p>{c.preview}</p>
                    {c.unread > 0 ? (
                      <span className="inbox-conversation__badge">{c.unread}</span>
                    ) : null}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
      </aside>

      <section className={`inbox-chat${active ? ' is-open' : ''}`}>
        {active ? (
          <>
            <header className="inbox-chat__header">
              <button
                type="button"
                className="inbox-chat__back"
                aria-label="Volver"
                onClick={() => navigate('/inbox')}
              >
                <Icon name="arrow_back" />
              </button>
              <img src={active.avatar} alt="" />
              <div>
                <strong>{active.name}</strong>
                <span>{active.online ? 'En línea' : active.handle}</span>
              </div>
              <button type="button" className="inbox-icon-btn" aria-label="Más opciones">
                <Icon name="more_vert" />
              </button>
            </header>

            <div className="inbox-chat__messages">
              {active.messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`inbox-bubble${msg.fromMe ? ' is-mine' : ''}`}
                >
                  <p>{msg.text}</p>
                  <time>{msg.time}</time>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form className="inbox-composer" onSubmit={sendMessage}>
              <button type="button" aria-label="Adjuntar" className="inbox-icon-btn">
                <Icon name="image" />
              </button>
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <button
                type="submit"
                className="inbox-composer__send"
                disabled={!draft.trim()}
                aria-label="Enviar"
              >
                <Icon name="send" filled />
              </button>
            </form>
          </>
        ) : (
          <div className="inbox-chat__placeholder">
            <div className="inbox-chat__placeholder-icon">
              <Icon name="forum" size={40} />
            </div>
            <h2>Tus mensajes</h2>
            <p>Selecciona una conversación para empezar a chatear en Nexa.</p>
          </div>
        )}
      </section>

      {!chatOpen ? <BottomNav /> : null}
    </div>
  )
}
