import { useRef, useState, type ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { NexaLogo } from '../components/NexaLogo'
import './CreatePostPage.css'

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCFtuqZLaMvbBtMiwgunEqlhGapVLiItIUXoVwyDl14Cpc-BtIB1esUoVBVOOfevWyz-vTv82ajgi-oQPY36hbeb4hGtq2M9LwdXND9Uz3_XGE6ypcAAmaUvuUIeukiYf3nfTXRtTpJ_vraQPSrm6W36e7dmagabcBqpxAbbdU4iwpk8ZDd_tUCdIsI0EFJGjemt4GezZnDrdpRhZ3cp1Y7oPm7-7qXJ6GHTa0QCl6qU9TN4w_pn3VB'

const DEMO_MEDIA =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAFKbdzuTxdzbih2yMeaQc9AZom6X9JBhDjh0G6B_7G4bhaq9m8xoHVZXhyNSQfQYwyxAQmXJRdUa9mrlhmk2_nYccHwtfNtJKIiyeaOzxJW4_l4o4VFTGhAGw4gJqJYtyY9JUIeyQqkBi7OBbV5Y0diabWWHnZVHXYtrztDPKizWPW-GkoeY23lU8IlDfPqBsgkRM76QB-sb6DkiUW_Vqb_nnCTKY_rikWRGDDqzo-4fJ0hIB7P3Cj'

const PRIVACY = [
  { id: 'public', label: 'Público', icon: 'public' },
  { id: 'followers', label: 'Seguidores', icon: 'group' },
  { id: 'private', label: 'Solo yo', icon: 'lock' },
] as const

export function CreatePostPage() {
  const navigate = useNavigate()
  const fileRef = useRef<HTMLInputElement>(null)
  const [text, setText] = useState('')
  const [privacy, setPrivacy] = useState<(typeof PRIVACY)[number]>(PRIVACY[0])
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [mediaUrl, setMediaUrl] = useState<string | null>(null)

  function goBack() {
    navigate(-1)
  }

  function handlePublish() {
    navigate('/feed')
  }

  function handleAddImage() {
    if (mediaUrl) return
    // Demo: show sample media like the Stitch design; also allow file pick
    setMediaUrl(DEMO_MEDIA)
    fileRef.current?.click()
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return
    const url = URL.createObjectURL(file)
    setMediaUrl(url)
  }

  return (
    <div className="create-page">
      <main className="create-modal">
        <header className="create-modal__header">
          <div className="create-modal__heading">
            <NexaLogo size="sm" showWordmark={false} />
            <h1 className="create-modal__title">Nueva publicación</h1>
          </div>
          <button type="button" className="create-modal__cancel" onClick={goBack}>
            Cancelar
          </button>
        </header>

        <div className="create-modal__body">
          <div className="create-modal__user">
            <img src={AVATAR} alt="" />
            <div>
              <span className="create-modal__name">Nexa User</span>
              <div className="create-modal__privacy-wrap">
                <button
                  type="button"
                  className="create-modal__privacy"
                  onClick={() => setPrivacyOpen((open) => !open)}
                  aria-expanded={privacyOpen}
                >
                  <Icon name={privacy.icon} size={16} />
                  <span>{privacy.label}</span>
                  <Icon name="arrow_drop_down" size={16} />
                </button>
                {privacyOpen ? (
                  <ul className="create-modal__privacy-menu" role="listbox">
                    {PRIVACY.map((option) => (
                      <li key={option.id}>
                        <button
                          type="button"
                          className={option.id === privacy.id ? 'is-active' : undefined}
                          onClick={() => {
                            setPrivacy(option)
                            setPrivacyOpen(false)
                          }}
                        >
                          <Icon name={option.icon} size={18} />
                          {option.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>

          <textarea
            className="create-modal__textarea"
            placeholder="¿Qué estás pensando?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={6}
            autoFocus
          />

          {mediaUrl ? (
            <div className="create-modal__media">
              <img src={mediaUrl} alt="" />
              <button
                type="button"
                className="create-modal__media-remove"
                aria-label="Quitar imagen"
                onClick={() => setMediaUrl(null)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>
          ) : null}
        </div>

        <footer className="create-modal__footer">
          <div className="create-modal__tools">
            <button type="button" aria-label="Añadir imagen" onClick={handleAddImage}>
              <Icon name="image" />
            </button>
            <button type="button" aria-label="Añadir emoji">
              <Icon name="sentiment_satisfied" />
            </button>
            <button type="button" aria-label="Añadir encuesta">
              <Icon name="poll" />
            </button>
            <button type="button" aria-label="Ubicación" className="create-modal__tool-mobile">
              <Icon name="location_on" />
            </button>
          </div>
          <button
            type="button"
            className="create-modal__publish"
            onClick={handlePublish}
            disabled={!text.trim() && !mediaUrl}
          >
            <Icon name="send" size={18} />
            Publicar
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="create-modal__file"
            onChange={handleFileChange}
          />
        </footer>
      </main>
    </div>
  )
}
