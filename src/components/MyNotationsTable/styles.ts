import styled from "styled-components"

export const Table = styled.table`
   width: 100%;
   margin-top: 2rem;
   border: none;
   border-spacing: 2px;
   font: ${({theme}) => theme.fonts.body2};

   thead tr{
      background-color: ${({theme}) => theme.colors.whiteT06};
      backdrop-filter: blur(40px);
      
      th{
         text-align: left;
         color: ${({theme}) => theme.colors.darkBlue};
         padding: .7rem 1rem;
      }
      
      th:first-child{
         border-radius: 20px 0 0 0;
      }

      th:last-child{
         border-radius: 0 20px 0 0;
      }
   }

   tbody tr{
      background-color: ${({theme}) => theme.colors.whiteT01};
      backdrop-filter: blur(40px);
      
      td{
         padding: 1rem;
      }
   }

   tfoot tr{
      backdrop-filter: blur(40px);
      color: ${({theme}) => theme.colors.darkBlue};
      background-color: ${({theme}) => theme.colors.whiteT06};

      td{
         
         div{
         }
      }
   }
   `

export const TableFooter = styled.div`
   padding: .7rem 1rem;
   margin: 0 2px;
   border-radius: 0 0 20px 20px;
   color: ${({theme}) => theme.colors.darkBlue};
   background-color: ${({theme}) => theme.colors.whiteT06};

   display: flex;
   justify-content: flex-end;
`