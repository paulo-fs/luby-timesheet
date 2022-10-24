import { ThemeProvider } from "styled-components"

import { darkTheme } from "@/shared/styles/theme/defaultTheme"
import { GlobalStyle } from "@/shared/styles/global"

import { Background } from "@/components"
import { Routes } from "@/shared/routes";


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Background>
        <Routes />
        <GlobalStyle />
      </Background>
    </ThemeProvider>
  )
}

export default App
