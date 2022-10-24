import { LabelHTMLAttributes, ReactElement } from "react"

import mailIcon from '@/shared/assets/icons/Message.svg'
import searchIcon from '@/shared/assets/icons/Search.svg'
import showIcon from '@/shared/assets/icons/Show.svg'
import hideIcon from '@/shared/assets/icons/Hide.svg'

import { LabelContainer } from "./styles"

const iconSelector = {
  email: mailIcon,
  search: searchIcon,
  password: hideIcon,
  none: ''
}

interface Props extends LabelHTMLAttributes<HTMLLabelElement>{
  children: ReactElement
  type: keyof (typeof iconSelector)
}

export default function InputLabel
({ children, type, ...rest } : Props) {
  

  return (
    <LabelContainer {...rest}>
      {children}
      <img src={iconSelector[type]} alt='mailInput' />
    </LabelContainer>
  )
}
