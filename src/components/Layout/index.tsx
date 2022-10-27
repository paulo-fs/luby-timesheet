import { Outlet } from "react-router-dom";
import styled from "styled-components";

import {Header} from "../index";

export default function Layout() {
  return (
    <>
      <Header />
      <Container>
         <Outlet />
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  padding: 2rem 7.8rem;
`