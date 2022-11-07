import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Button } from './styles';

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
}

export default function SecondaryBtn({
  children,
  ...rest
}: SecondaryButtonProps) {
  return <Button {...rest}>{children}</Button>;
}
