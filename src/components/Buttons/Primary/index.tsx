import {ButtonHTMLAttributes} from 'react'

import { Btn } from "./styles";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
   children: string
}

export default function PrimaryBtn
({ children, ...rest } : PrimaryButtonProps) {
  return (
    <Btn {...rest}>
      { children }
    </Btn>
  )
}
