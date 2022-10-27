import { useContext } from 'react'
import {Routes, Route, Navigate, } from 'react-router-dom'
import { Context } from '../context'

import { LoginPage } from '@/pages'

export default function NotSignedRoutes() {
  const {isSigned} = useContext(Context)

  function NotFound(){
    return isSigned
      ? <Navigate to='/' replace />
      : <Navigate to='/login' replace />
  }

  console.log('isSigned', isSigned)

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
