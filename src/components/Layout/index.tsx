import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>header</header>
      <div>
         <p>conteudo</p>
         <Outlet />
      </div>
    </>
  )
}
