import styled from "styled-components";

export const Container = styled.input`
   width: 100%;
   padding-block: 1rem;
   padding-inline: 1.5rem;
   
   outline: none;
   border: none;
   border-radius: 10px;
   background-color: ${({theme}) => theme.colors.whiteT01}; 
   backdrop-filter: blur(40px);
   

   font-size: 1rem;
   color: ${({theme }) => theme.colors.white};

   
   &::placeholder {
      font: ${({theme}) => theme.fonts.inputs};
      color: ${({theme}) => theme.colors.whiteT03};
   }

   &::focus{
      border-color: ${({theme}) => theme.colors.whiteT03};
   }
`