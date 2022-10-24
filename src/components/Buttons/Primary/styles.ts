import styled from "styled-components";

export const Btn = styled.button`
   padding: 1rem 1.5rem;
   font: ${({theme}) => theme.fonts.inputs};

   border: none;
   border-radius: 10px;
   
   background-color: ${({ theme }) => theme.colors.greenT06};
   color: ${({theme }) => theme.colors.white};

   transition: .2s;
   &:hover {
      background-color: ${({ theme }) => theme.colors.green};
   }
`