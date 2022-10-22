import { ThemeProvider } from "styled-components"

import { darkTheme } from "@/shared/styles/theme/defaultTheme"
import { GlobalStyle } from "@/shared/styles/global"

import { Background } from "@/components"


function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Background>
        <h1>hello world</h1>

        <GlobalStyle />
      </Background>
    </ThemeProvider>
  )
}

export default App
