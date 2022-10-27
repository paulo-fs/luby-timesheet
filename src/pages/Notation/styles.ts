import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 90%;

   display: flex;
   gap: 2rem;

   .fields{
      width: clamp(20rem, 100%, 32rem);
      height: 100%;

      background-color: ${({theme}) => theme.colors.whiteT01};
   }

   .notation-text{
      width: 100%;
      height: 100%;

      background-color: ${({theme}) => theme.colors.whiteT01};
   }
`