import styled from "styled-components";

export const Background = styled.div`
   width: 100%;
   height: 100vh;
   background-size: cover;
   color: ${({theme}) => theme.colors.white};
   
   display: flex;
   flex-direction: column;
   
   header {
      width: 100%;
      max-width: 1440px;
      padding: 5rem 8rem 0rem;
      margin: 0 auto;
   }
   
   main {
      width: min(90%, 500px);
      height: 100%;
      margin: 0 auto 8rem;
      
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      gap: 3rem;

      h1{
         font: ${({theme}) => theme.fonts.heading1};
         font-weight: 400;

         span{
            display: block;
            margin-top: 1rem;
         }
      }
   }
`