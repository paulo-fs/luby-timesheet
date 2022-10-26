import { ThemeProvider } from "styled-components"

import { darkTheme } from "@/shared/styles/theme/defaultTheme"
import { GlobalStyle } from "@/shared/styles/global"

import { Background } from "@/components"
import { Routes } from "@/shared/routes";
import { ContextProvider } from "./shared/context";


function App() {

  return (
    <ContextProvider>
      <ThemeProvider theme={darkTheme}>
        <Background>
          <Routes />
          <GlobalStyle />
        </Background>
      </ThemeProvider>
    </ContextProvider>
  )
}

export default App
