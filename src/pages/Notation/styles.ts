import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 90%;

   display: flex;
   gap: 2rem;

   .fields{
      width: clamp(20rem, 100%, 32rem);
      height: 100%;
      color: ${({theme}) => theme.colors.white};

      display: flex;
      flex-direction: column;
      gap: 2.5rem;

      [data-headlessui-state="open"] {
         position: relative;
         z-index: 2;
      }

      .flex-column{
         display: flex;
         flex-direction: column;
         gap: .5rem;
      }

      .margin-bottom{
         margin-bottom: .5rem;
         margin-top: .2rem;
      }

      .time{
         display: flex;
         gap: 1rem;

         div{
            width: 100%;
         }
      }

      .counting-time{
         div{
            display: flex;
            justify-content: space-between;
         }
      }

      .checkbox{
         input{
            margin-right: 1rem;
         }
      }

      .btn{
         margin-top: auto;
      }
   }

   .notation-text{
      width: 100%;
      height: 100%;

      div + textarea{
         margin-top: 1.5rem;
      }

      .github{
         display: flex;
         align-items: flex-start;
         gap: 1rem;

         button{
            margin-left: auto;
         }
      }

      textarea{
         background-color: ${({theme}) => theme.colors.whiteT01};
         width: 100%;
         height: 90%;
         padding: 2rem;
         border: none;
         outline: none;
         border-radius: 10px;

         color: ${({theme}) => theme.colors.white};
         font: ${({theme}) => theme.fonts.body2};
      }
   }
`