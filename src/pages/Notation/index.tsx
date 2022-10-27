import { Select } from '@/components'
import { useState, Fragment } from 'react'

import {Container} from './styles'

const clients = [
  { id: 1, name: 'Incubadora JS' },
  { id: 2, name: 'Incubadora C#' },
  { id: 3, name: 'Multi' },
  { id: 4, name: 'Banco X' },
]

export default function Notation() {
  

  return (
    <Container>
      <div className="fields">
        <Select />
      </div>
      <div className="notation-text"></div>
    </Container>
  )
}
