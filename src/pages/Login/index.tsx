import { CustomLink, Input, InputLabel, PrimaryBtn } from '@/components'

import loginBackground from '@/shared/assets/background-login.png'
import logo from '@/shared/assets/logo-full.svg'

import { Background } from './styles'

export default function LoginPage() {
  return (
      <Background style={{ backgroundImage: `url(${loginBackground})` }}>
         <header>
            <img src={logo} alt='logo' />
         </header>

         <main>
            <h1>Transformamos
               <span>
                  <strong> ideias </strong> em <strong>realidade</strong>
               </span>
            </h1>

            <form>
               <h2>
                  timesheet
               </h2>
               <InputLabel type='email'>
                  <Input id='email' autoFocus 
                     placeholder='Meu e-mail' 
                  />
               </InputLabel>
               <InputLabel type='password'>
                  <Input id='email' autoFocus 
                     placeholder='Minha senha'
                     type='password'
                  />
               </InputLabel>
               <PrimaryBtn>Entrar</PrimaryBtn>
               <CustomLink>Esqueci minha senha</CustomLink>
            </form>
         </main>
      </Background>
  )
}
