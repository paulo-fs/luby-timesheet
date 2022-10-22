import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      -webkit-font-smoothing: antialiased;
      width: 100vw;
      height: 100vh;
      overflow-x: hidden;
   }

   body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
   }

   button {
      cursor: pointer;
   }

   a {
      text-decoration: none;
   }

   @media (max-width: 768px) {
      :root {
         font-size: 14px;
      }
   }

   @media (max-width: 480px) {
      :root {
         font-size: 13px;
      }
   }
`