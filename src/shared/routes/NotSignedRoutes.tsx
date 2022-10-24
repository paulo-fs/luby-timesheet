import { LoginPage } from '@/pages'
import {Routes, Route, } from 'react-router-dom'

export default function NotSignedRoutes() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
    </Routes>
  )
}
