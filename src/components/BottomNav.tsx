import { NavLink } from 'react-router-dom'
import { Icon } from './Icon'
import './BottomNav.css'

type NavItem = {
  to: string
  label: string
  icon: string
  end?: boolean
  create?: boolean
}

const items: NavItem[] = [
  { to: '/feed', label: 'Home', icon: 'home', end: true },
  { to: '/explore', label: 'Explore', icon: 'explore' },
  { to: '/create', label: 'Create', icon: 'add_circle', create: true },
  { to: '/inbox', label: 'Inbox', icon: 'mail' },
  { to: '/profile', label: 'Profile', icon: 'person' },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="Navegación principal">
      {items.map((item) =>
        item.create ? (
          <NavLink key={item.to} to={item.to} className="bottom-nav__create">
            <span className="bottom-nav__create-btn">
              <Icon name="add_circle" size={28} />
            </span>
            <span className="bottom-nav__create-spacer">Create</span>
          </NavLink>
        ) : (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `bottom-nav__item${isActive ? ' is-active' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                <Icon name={item.icon} filled={isActive} size={24} />
                <span>{item.label}</span>
              </>
            )}
          </NavLink>
        ),
      )}
    </nav>
  )
}
