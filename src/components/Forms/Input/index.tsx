import { forwardRef, ForwardRefRenderFunction, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

import { Input as StyledInput } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
   type?: HTMLInputTypeAttribute
   error?: FieldError | null
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props>
= ({type = 'text', error = null, ...rest} : Props, ref) => {
  return (
      <StyledInput 
         type={type} ref={ref} {...rest} error={!!error}
      />
  )
}

const Input = forwardRef(InputBase)
export default Input
