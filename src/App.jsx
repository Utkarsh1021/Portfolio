import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CertificationsGallery from './pages/CertificationsGallery'
import ActivitiesGallery from './pages/ActivitiesGallery'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certifications" element={<CertificationsGallery />} />
      <Route path="/activities" element={<ActivitiesGallery />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
