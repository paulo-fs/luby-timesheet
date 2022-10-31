import styled, { css } from "styled-components";

interface ChipProps {
   status: 'pending' | 'approved' | 'disapproved'
}

const chipsColor = {
   pending: 'yellowT06',
   approved: 'greenT06',
   disapproved: 'redT06'
}

export const ChipContainer = styled.div<ChipProps>`
   padding: .5rem 1.5rem;
   font: ${({theme}) => theme.fonts.body2};

   border-radius: 10rem;
   background-color: ${({theme, status}) => theme.colors[chipsColor[status]]};

   span{
      margin-left: .5rem;
   }
`