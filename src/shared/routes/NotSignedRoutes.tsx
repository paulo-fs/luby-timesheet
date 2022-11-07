import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { LoginPage } from '@/pages';

export default function NotSignedRoutes() {
  const isSigned = useSelector<RootState>((state) => state.authSlice.isSigned);

  function NotFound() {
    return isSigned ? (
      <Navigate to="/" replace />
    ) : (
      <Navigate to="/login" replace />
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
