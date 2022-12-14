import styled from 'styled-components'
import { Combobox } from '@headlessui/react'

export const StyledCombobox = styled.div`
   height: 3.5rem;
   
   border-radius: 10px;
   background-color: ${({theme}) => theme.colors.whiteT01};

   transition: .2s;
   &:hover{
      background-color: ${({theme}) => theme.colors.whiteT03};
   }
`

export const SelectLabel = styled(Combobox.Label)`
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
   color: ${({theme}) => theme.colors.whiteT06};
   
   background-color: ${({theme}) => theme.colors.whiteT01};
   backdrop-filter: blur(40px);
   border-radius: 10px;
   
   li{
      padding: .8rem 1.5rem;
      position: relative;

      transition: .2s;
      &:hover{
         background-color: ${({theme}) => theme.colors.greenT01};
         color: ${({theme}) => theme.colors.white};

         &::before{
            content: '';
            width: 6px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 60px 0 0 60px;
            background-color: ${({theme}) => theme.colors.green};
         }
      }
   }
`