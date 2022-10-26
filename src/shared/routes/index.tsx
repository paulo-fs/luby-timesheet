import { useContext } from 'react';
import { Context } from '../context';
import {BrowserRouter} from 'react-router-dom'

import NotSignedRoutes from "./NotSignedRoutes";
import SignedRoutes from "./SignedRoutes";

export function Routes() {
  const {isSigned} = useContext(Context)
   
  return (
    <BrowserRouter>
      {isSigned
          ? <SignedRoutes />
          : <NotSignedRoutes />
      }
    </BrowserRouter>
  )
}
