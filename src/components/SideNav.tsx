import { Link, NavLink } from 'react-router-dom'
import { Icon } from './Icon'
import { NexaLogo } from './NexaLogo'
import './SideNav.css'

const AVATAR =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDJXncPPBnXiG5FyvomqIafiIX7Hr25tOi7PcQaBPULcyqe9m1xAZ2U27a5DxXCP9fY7cQsL5rNIhKmeR4xN4dN8v-ZnCVjGLhbtsVOXmQAsGrTfzMGD8e6-XjYYV4CJ4uEzBK0C5ilkYvNmMJRzu1iBEUDYX-TG88IF7rZlxvSghAoH8lu7IT1DPKkz_4Ov3i9XjVG1LoaoavIpu3laTQTkWfQeDpE4mNVNs9udLRXaNkTyc4eHJtf'

const NAV = [
  { to: '/feed', label: 'Home', icon: 'home', end: true },
  { to: '/explore', label: 'Explore', icon: 'search' },
  { to: '/notifications', label: 'Notifications', icon: 'notifications' },
  { to: '/inbox', label: 'Messages', icon: 'mail' },
  { to: '/create', label: 'Create', icon: 'add_box' },
  { to: '/profile', label: 'Profile', icon: 'person' },
  { to: '/settings', label: 'Settings', icon: 'settings' },
]

export function SideNav() {
  return (
    <aside className="side-nav">
      <Link to="/feed" className="side-nav__brand" aria-label="Nexa">
        <NexaLogo size="sm" />
      </Link>
      <Link to="/profile" className="side-nav__user">
        <img src={AVATAR} alt="" />
        <div>
          <strong>Nexa User</strong>
          <span>@nexa_user</span>
        </div>
      </Link>
      <ul>
        {NAV.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} filled={isActive} size={24} />
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
