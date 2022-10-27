import {Routes, Route, Navigate } from 'react-router-dom'

import { Layout } from '@/components'
import { Notation } from '@/pages'
import { useContext } from 'react'
import { Context } from '../context'

export default function SignedRoutes() {
  const {isSigned} = useContext(Context)

  function NotFound(){
    return isSigned
      ? <Navigate to='/' />
      : <Navigate to='/login' />
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Notation />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
