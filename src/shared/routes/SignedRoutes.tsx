import { Layout } from '@/components'
import { Notation } from '@/pages'
import {Routes, Route, } from 'react-router-dom'

export default function SignedRoutes() {
  return (
    <Routes>
      <Route path='/signed' element={<Layout />}>
        <Route path='/signed/notation' element={<Notation />} />
      </Route>
    </Routes>
  )
}
