import styled from "styled-components";

export const LinkContainer = styled.a`
   width: fit-content;
   font: ${({theme}) => theme.fonts.inputs};
   color: ${({theme}) => theme.colors.white};
   position: relative;

   cursor: pointer;

   &::before{
      content:'';
      width: 0%;
      height: 2px;
      background-color: ${({theme}) => theme.colors.blue};
      position: absolute;
      bottom: -6px;
      left: 0;

      transition: .2s;
   }

   transition: .2s;
   &:hover {
      color: ${({theme}) => theme.colors.blue};

      &::before{
         width: 100%;
         background-color: ${({theme}) => theme.colors.blue};
      }
   }
`