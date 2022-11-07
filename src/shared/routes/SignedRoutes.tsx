import { Routes, Route, Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store';

import { Layout } from '@/components';
import { Notation, EvaluateNotations, MyNotations } from '@/pages';

export default function SignedRoutes() {
  const isSigned = useSelector<RootState>((state) => state.authSlice.isSigned);

  function NotFound() {
    return isSigned ? <Navigate to="/" /> : <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Notation />} />
        <Route path="/new-notation" element={<Notation />} />
        <Route path="/evaluate" element={<EvaluateNotations />} />
        <Route path="/my-notations" element={<MyNotations />} />
        <Route path="/reports" element={<Notation />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
