import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'
import './LoginPage.css'

const GOOGLE_LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAohnYywHwhDPesDLMetsNarc4bznkBMsjSpe11T2gH-kPS6tLYivk7dPZ9FDakC9u55Vp62ZBpaEQEen7R0yApemtq_Od7p3KCsgEq0ZOFhe26VegUB7WSNZ5WG6LTiCsJ3zUABsqUJZhz-oRWVTvxzwycnNwH2WeVKtFvea4BCdEe37fauuNBoZBVBDgyMpVCaUz7JpZwsJcU2D4vymRQ2NLlRaytgCE_FSSz1F_sGmagqOs-bF0s'

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
            <div className="login-card__logo">
              <Icon name="hub" size={36} />
            </div>
            <h1>Nexa</h1>
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
            <img src={GOOGLE_LOGO} alt="" width={20} height={20} />
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
