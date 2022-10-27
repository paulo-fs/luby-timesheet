import styled from "styled-components";

export const HeaderContainer = styled.header`
   width: 100%;
   height: 4rem;

   backdrop-filter: bluer(70px);
   background-color: ${({theme}) => theme.colors.whiteT01};

   .content{
      width: 100%;
      height: 100%;
      margin: 0 auto;
      padding-inline: 7.8rem;

      display: flex;
      align-items: center;
   }

   .logo{
      height: 2.5rem;
   }

   nav{
      margin-left: 3rem;
   }

   .user {
      margin-left: auto;
   }
`

export const NavLinks = styled.nav`
   display: flex;
   gap: 2rem;
`

export const User = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   
   color: ${({theme}) => theme.colors.white};

.avatar{
   width: 2.5rem;
   height: 2.5rem;
   border-radius: 10rem;
}
`