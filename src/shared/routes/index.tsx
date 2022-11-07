import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { BrowserRouter } from 'react-router-dom';

import NotSignedRoutes from './NotSignedRoutes';
import SignedRoutes from './SignedRoutes';

export function Routes() {
  const isSigned = useSelector<RootState>((state) => state.authSlice.isSigned);

  return (
    <BrowserRouter>
      {isSigned ? <SignedRoutes /> : <NotSignedRoutes />}
    </BrowserRouter>
  );
}
