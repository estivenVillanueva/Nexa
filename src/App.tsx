import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CreatePostPage } from './pages/CreatePostPage'
import { FeedPage } from './pages/FeedPage'
import { LoginPage } from './pages/LoginPage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { ProfilePage } from './pages/ProfilePage'
import { RegisterPage } from './pages/RegisterPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/explore" element={<PlaceholderPage title="Explorar" />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/inbox" element={<PlaceholderPage title="Mensajes" />} />
        <Route
          path="/followers"
          element={<PlaceholderPage title="Seguidores y Siguiendo" />}
        />
        <Route
          path="/notifications"
          element={<PlaceholderPage title="Notificaciones" />}
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
