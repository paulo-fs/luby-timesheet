import { LoginForm } from '@/components'

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

            <LoginForm />
         </main>
      </Background>
  )
}
