import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Context } from '@/shared/context';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import {
   PrimaryBtn, CustomLink, Input, InputLabel
} from "@/components";

import { Form } from "./styles";

const loginFormSchema = yup.object().shape({
   email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
   password: yup.string().required('Senha obrigatória')
})

export default function LoginForm() {
   const {handleSignIn} = useContext(Context)
   const navigate = useNavigate()
   const { register, handleSubmit, formState, trigger, watch  } = useForm({
      resolver: yupResolver(loginFormSchema)
   })
   const { errors } = formState
   const watchedFields = watch(['email', 'password'])
   const isNotValid = !!(errors.email || errors.password 
      || !(watchedFields[0] && watchedFields[1]))

   const handleLogin: SubmitHandler<FieldValues> = (values) => {
      handleSignIn()
      navigate('/signed/notation')
      console.log(values)
   }

  return (
   <Form onSubmit={handleSubmit(handleLogin)}>
      <h2>
         timesheet
      </h2>
      <InputLabel type='email' error={errors.email}>
         <Input id='email' autoFocus 
            type='email'
            placeholder='Meu e-mail'
            {...register('email')}
            error={errors.email}
            onBlur={async() => await trigger('email')}
         />
      </InputLabel>
      <InputLabel type='password' error={errors.password}>
         <Input id='password'
            type='password'
            placeholder='Minha senha'
            {...register('password')}
            error={errors.password}
            onBlur={async() => await trigger('password')}
         />
      </InputLabel>
      <PrimaryBtn type='submit' disabled={isNotValid} data-cy='signin'>
         Entrar
      </PrimaryBtn>
      <CustomLink>Esqueci minha senha</CustomLink>
   </Form>
  )
}
