import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CreatePostPage } from './pages/CreatePostPage'
import { ExplorePage } from './pages/ExplorePage'
import { FeedPage } from './pages/FeedPage'
import { FollowersPage } from './pages/FollowersPage'
import { LoginPage } from './pages/LoginPage'
import { NotificationsPage } from './pages/NotificationsPage'
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
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/create" element={<CreatePostPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/followers" element={<FollowersPage />} />
        <Route path="/inbox" element={<PlaceholderPage title="Mensajes" />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
