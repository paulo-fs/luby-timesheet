import styled from "styled-components";

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   gap: .5rem;
   
   h2{
      font: ${({theme}) => theme.fonts.heading3};
      text-transform: uppercase;
      margin-bottom: 1rem;
   }

   button{
      margin-top: .5rem;
   }

   a{
      margin-top: 1.5rem;
   }
`