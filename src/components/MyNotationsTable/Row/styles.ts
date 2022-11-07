import styled from "styled-components";

export const Row = styled.tr`
   background-color: ${({theme}) => theme.colors.whiteT01};
   backdrop-filter: blur(40px);
   
   td{
      padding: 1rem;
   }
`

export const RowInfos = styled.tr`
   width: 100%;
   background-color: ${({theme}) => theme.colors.whiteT01};
`