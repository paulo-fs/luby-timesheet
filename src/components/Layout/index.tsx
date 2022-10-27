import { Outlet } from "react-router-dom";

import {Header} from "../index";

export default function Layout() {
  return (
    <>
      <Header />
      <div>
         <p>conteudo</p>
         <Outlet />
      </div>
    </>
  )
}
