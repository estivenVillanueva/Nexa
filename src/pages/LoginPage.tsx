import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GoogleLogo } from '../components/GoogleLogo'
import { Icon } from '../components/Icon'
import { NexaLogo } from '../components/NexaLogo'
import './LoginPage.css'

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    navigate('/feed')
  }

  return (
    <div className="login-page">
      <main className="login-page__main">
        <div className="login-card">
          <div className="login-card__brand">
            <NexaLogo size="lg" showWordmark={false} />
          </div>

          <div className="login-card__intro">
            <h2>Bienvenido de nuevo</h2>
            <p>Accede a tu red social tecnológica</p>
          </div>

          <form className="login-card__form" onSubmit={handleSubmit}>
            <label className="login-field">
              <span>Correo electrónico</span>
              <div className="login-field__control">
                <Icon name="mail" className="login-field__icon" />
                <input
                  type="email"
                  placeholder="tu@correo.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
            </label>

            <label className="login-field">
              <span>Contraseña</span>
              <div className="login-field__control">
                <Icon name="lock" className="login-field__icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
            </label>

            <div className="login-card__row">
              <label className="login-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="login-remember__box" aria-hidden>
                  <Icon name="check" filled size={14} />
                </span>
                <span>Recordarme</span>
              </label>
              <a href="#forgot" className="login-card__link">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button type="submit" className="btn-primary">
              Iniciar sesión
              <Icon name="arrow_forward" size={18} />
            </button>
          </form>

          <div className="login-card__divider">
            <span>o</span>
          </div>

          <button
            type="button"
            className="btn-google"
            onClick={() => navigate('/feed')}
          >
            <GoogleLogo size={24} className="btn-google__logo" />
            Continuar con Google
          </button>

          <p className="login-card__footer">
            ¿No tienes una cuenta?{' '}
            <Link to="/register">Crear una cuenta</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
