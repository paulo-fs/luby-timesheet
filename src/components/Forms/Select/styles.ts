import styled from 'styled-components'
import { Combobox } from '@headlessui/react'

export const StyledCombobox = styled.div`
   width: 100%;
   height: 3.5rem;
   border-radius: 10px;

   backdrop-filter: blur(40px);
   background-color: ${({theme}) => theme.colors.whiteT01};

   transition: .2s;
   &:hover{
      background-color: ${({theme}) => theme.colors.whiteT03};
   }
`

export const SelectLabel = styled(Combobox.Label)`
   width: 100%;
   height: 100%;
   padding-inline: 1.5rem; 

   display: flex;
   align-items: center;
   justify-content: space-between;

   input{
      background: transparent;
      font: ${({theme}) => theme.fonts.body2};
      color: ${({theme}) => theme.colors.white};
      border: none;
      outline: none;
   }

   button{
      background: transparent;
      border: none;
      display: grid;
      place-content: center;

      img{
         opacity: .75;
      }
   }
`

export const StyledList = styled(Combobox.Options)`
   list-style: none;
   margin-top: .3rem;
   padding: .5rem 1.5rem;
   color: ${({theme}) => theme.colors.white};

   background-color: ${({theme}) => theme.colors.whiteT01};
   border-radius: 10px;

   display: flex;
   flex-direction: column;
   gap: .3rem;
`