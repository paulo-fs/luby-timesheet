import styled from "styled-components";

export const Button = styled.button`
   padding: .5rem 1.5rem;
   display: grid;
   place-content: center;

   border: 2px solid ${({theme}) => theme.colors.greenT06};
   border-radius: 10px;
   
   background-color: ${({theme}) => theme.colors.greenT01};
   color: ${({theme}) => theme.colors.green};

   svg path{
      stroke: ${({theme}) => theme.colors.green};
   }

   transition: .2s;
   &:hover{
      background-color: ${({theme}) => theme.colors.green};
      color: ${({theme}) => theme.colors.white};

      svg path{
         stroke: ${({theme}) => theme.colors.white};
      }
   }

   &:disabled{
      border: 2px solid ${({theme}) => theme.colors.greenT01};
      color: ${({theme}) => theme.colors.greenT03};
      cursor: not-allowed;

      svg path{
         stroke: ${({theme}) => theme.colors.greenT03};
      }
   }
`