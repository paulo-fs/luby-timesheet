import { ReactNode } from 'react';

import background from '@/shared/assets/background.png';
import { BackgroundImage } from './styles';

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <BackgroundImage
      style={{
        backgroundImage: `url(${background})`,
        height: 'auto',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {children}
    </BackgroundImage>
  );
}
