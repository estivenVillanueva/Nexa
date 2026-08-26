import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '../components/Icon'
import './RegisterPage.css'

export function RegisterPage() {
  const navigate = useNavigate()
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [dob, setDob] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }
    setError('')
    navigate('/feed')
  }

  return (
    <div className="register-page">
      <main className="register-card">
        <div className="register-card__glow" aria-hidden />

        <header className="register-card__header">
          <h1>Nexa</h1>
          <p>Crea tu cuenta para conectarte.</p>
        </header>

        <form className="register-card__form" onSubmit={handleSubmit}>
          <label className="register-field">
            <span>Nombre completo</span>
            <div className="register-field__control">
              <Icon name="person" className="register-field__icon" />
              <input
                type="text"
                placeholder="Ej. Juan Pérez"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                autoComplete="name"
              />
            </div>
          </label>

          <label className="register-field">
            <span>Nombre de usuario</span>
            <div className="register-field__control">
              <Icon name="alternate_email" className="register-field__icon" />
              <input
                type="text"
                placeholder="@username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
              />
            </div>
          </label>

          <label className="register-field">
            <span>Correo electrónico</span>
            <div className="register-field__control">
              <Icon name="mail" className="register-field__icon" />
              <input
                type="email"
                placeholder="tu@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>
          </label>

          <div className="register-card__grid">
            <label className="register-field">
              <span>Contraseña</span>
              <div className="register-field__control">
                <Icon name="lock" className="register-field__icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </label>

            <label className="register-field">
              <span>Confirmar contraseña</span>
              <div className="register-field__control">
                <Icon name="lock_reset" className="register-field__icon" />
                <input
                  type="password"
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </div>
            </label>
          </div>

          <label className="register-field">
            <span>Fecha de nacimiento</span>
            <div className="register-field__control">
              <Icon name="calendar_today" className="register-field__icon" />
              <input
                type="date"
                required
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </label>

          {error ? <p className="register-card__error">{error}</p> : null}

          <button type="submit" className="register-card__submit">
            Crear cuenta
            <Icon name="arrow_forward" />
          </button>
        </form>

        <p className="register-card__footer">
          ¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </main>
    </div>
  )
}
