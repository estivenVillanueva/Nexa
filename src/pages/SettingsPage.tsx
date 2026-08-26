import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { Icon } from '../components/Icon'
import { SideNav } from '../components/SideNav'
import './SettingsPage.css'

type ToggleKey = 'push' | 'emailNotifs' | 'privateAccount' | 'showOnline'

export function SettingsPage() {
  const navigate = useNavigate()
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    push: true,
    emailNotifs: false,
    privateAccount: false,
    showOnline: true,
  })
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [confirmLogout, setConfirmLogout] = useState(false)

  function toggle(key: ToggleKey) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  function logout() {
    setConfirmLogout(false)
    navigate('/login', { replace: true })
  }

  function deleteAccount() {
    setConfirmDelete(false)
    navigate('/login', { replace: true })
  }

  return (
    <div className="settings-page">
      <SideNav />

      <header className="settings-topbar">
        <Link to="/profile" className="settings-topbar__back" aria-label="Volver">
          <Icon name="arrow_back" />
        </Link>
        <h1>Ajustes</h1>
        <span className="settings-topbar__spacer" />
      </header>

      <main className="settings-main">
        <h1 className="settings-title">Ajustes</h1>

        <section className="settings-section">
          <h2>Cuenta</h2>
          <div className="settings-card">
            <Link to="/profile" className="settings-row">
              <span className="settings-row__icon">
                <Icon name="person" />
              </span>
              <span className="settings-row__text">
                <strong>Editar perfil</strong>
                <small>Nombre, bio, foto y banner</small>
              </span>
              <Icon name="chevron_right" className="settings-row__chevron" />
            </Link>
            <button type="button" className="settings-row">
              <span className="settings-row__icon">
                <Icon name="mail" />
              </span>
              <span className="settings-row__text">
                <strong>Correo electrónico</strong>
                <small>nexa.user@email.com</small>
              </span>
              <Icon name="chevron_right" className="settings-row__chevron" />
            </button>
            <button type="button" className="settings-row">
              <span className="settings-row__icon">
                <Icon name="lock" />
              </span>
              <span className="settings-row__text">
                <strong>Cambiar contraseña</strong>
                <small>Actualiza tu seguridad</small>
              </span>
              <Icon name="chevron_right" className="settings-row__chevron" />
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h2>Preferencias</h2>
          <div className="settings-card">
            <label className="settings-row settings-row--toggle">
              <span className="settings-row__icon">
                <Icon name="notifications" />
              </span>
              <span className="settings-row__text">
                <strong>Notificaciones push</strong>
                <small>Likes, comentarios y mensajes</small>
              </span>
              <input
                type="checkbox"
                checked={toggles.push}
                onChange={() => toggle('push')}
              />
              <span className="settings-switch" aria-hidden />
            </label>
            <label className="settings-row settings-row--toggle">
              <span className="settings-row__icon">
                <Icon name="alternate_email" />
              </span>
              <span className="settings-row__text">
                <strong>Correos de Nexa</strong>
                <small>Resúmenes y novedades del producto</small>
              </span>
              <input
                type="checkbox"
                checked={toggles.emailNotifs}
                onChange={() => toggle('emailNotifs')}
              />
              <span className="settings-switch" aria-hidden />
            </label>
            <label className="settings-row settings-row--toggle">
              <span className="settings-row__icon">
                <Icon name="visibility_off" />
              </span>
              <span className="settings-row__text">
                <strong>Cuenta privada</strong>
                <small>Solo tus seguidores ven tu contenido</small>
              </span>
              <input
                type="checkbox"
                checked={toggles.privateAccount}
                onChange={() => toggle('privateAccount')}
              />
              <span className="settings-switch" aria-hidden />
            </label>
            <label className="settings-row settings-row--toggle">
              <span className="settings-row__icon">
                <Icon name="sensors" />
              </span>
              <span className="settings-row__text">
                <strong>Mostrar en línea</strong>
                <small>Visible en mensajes y perfil</small>
              </span>
              <input
                type="checkbox"
                checked={toggles.showOnline}
                onChange={() => toggle('showOnline')}
              />
              <span className="settings-switch" aria-hidden />
            </label>
          </div>
        </section>

        <section className="settings-section">
          <h2>Sesión</h2>
          <div className="settings-card">
            <button
              type="button"
              className="settings-row settings-row--action"
              onClick={() => setConfirmLogout(true)}
            >
              <span className="settings-row__icon settings-row__icon--warn">
                <Icon name="logout" />
              </span>
              <span className="settings-row__text">
                <strong>Cerrar sesión</strong>
                <small>Salir de esta cuenta en este dispositivo</small>
              </span>
            </button>
          </div>
        </section>

        <section className="settings-section">
          <h2>Zona de peligro</h2>
          <div className="settings-card settings-card--danger">
            <button
              type="button"
              className="settings-row settings-row--danger"
              onClick={() => setConfirmDelete(true)}
            >
              <span className="settings-row__icon settings-row__icon--danger">
                <Icon name="delete_forever" />
              </span>
              <span className="settings-row__text">
                <strong>Eliminar cuenta</strong>
                <small>Borra tu perfil, posts y mensajes de forma permanente</small>
              </span>
            </button>
          </div>
        </section>
      </main>

      <BottomNav />

      {confirmLogout ? (
        <div className="settings-dialog" role="dialog" aria-modal="true">
          <div className="settings-dialog__card">
            <h3>¿Cerrar sesión?</h3>
            <p>Tendrás que volver a iniciar sesión para usar Nexa.</p>
            <div className="settings-dialog__actions">
              <button type="button" onClick={() => setConfirmLogout(false)}>
                Cancelar
              </button>
              <button type="button" className="is-primary" onClick={logout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {confirmDelete ? (
        <div className="settings-dialog" role="dialog" aria-modal="true">
          <div className="settings-dialog__card">
            <h3>¿Eliminar tu cuenta?</h3>
            <p>
              Esta acción no se puede deshacer. Se eliminarán tu perfil, publicaciones
              y conversaciones.
            </p>
            <div className="settings-dialog__actions">
              <button type="button" onClick={() => setConfirmDelete(false)}>
                Cancelar
              </button>
              <button type="button" className="is-danger" onClick={deleteAccount}>
                Eliminar cuenta
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
