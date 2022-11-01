import { LinkContainer } from './styles';

interface CustomLinkProps {
  children: string;
  goTo?: string;
}

export default function CustomLink({ children, goTo = '/' }: CustomLinkProps) {
  return <LinkContainer to={goTo}>{children}</LinkContainer>;
}
