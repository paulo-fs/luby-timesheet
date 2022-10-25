import styled from "styled-components";

export const LabelContainer = styled.label`
   width: 100%;
   position: relative;

   display: flex;
   justify-content: space-between;
   align-items: center;

   img{
      position: absolute;
      right: 1.5rem;
      opacity: .5;
   }

   .error{
      position: absolute;
      top: .2rem;
      right: 1.5rem;
      font-size: .7rem;
      color: ${({theme}) => theme.colors.white};
   }
`