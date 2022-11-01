import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   color: ${({theme}) => theme.colors.white};
   font: ${({theme}) => theme.fonts.body1};
`

export const HeaderContainer = styled.div`
   width: 100%;

   .title{
      display: flex;
      justify-content: space-between;

      h1{
         font: ${({theme}) => theme.fonts.heading1};
      }

      .chips{
         display: flex;
         gap: 1.5rem;
      }
   }

   .data{
      color: ${({theme}) => theme.colors.whiteT06};
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
   }
`