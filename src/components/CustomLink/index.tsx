import { LinkContainer } from "./styles";

interface CustomLinkProps{
   children: string
}

export default function CustomLink
({ children } : CustomLinkProps) {
  return (
    <LinkContainer>
      { children }
    </LinkContainer>
  )
}
