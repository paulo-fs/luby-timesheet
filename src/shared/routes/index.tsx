import {BrowserRouter} from 'react-router-dom'
import NotSignedRoutes from "./NotSignedRoutes";
import SignedRoutes from "./SignedRoutes";

export function Routes() {
  const isSigned = false;
   
  return (
    <BrowserRouter>
      {isSigned
          ? <SignedRoutes />
          : <NotSignedRoutes />
      }
    </BrowserRouter>
  )
}
