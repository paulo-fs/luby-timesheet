import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Container } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
   type?: HTMLInputTypeAttribute
}

export default function Input({type = 'text', ...rest} : Props) {
  return (
      <Container type={type} {...rest} />
  )
}
