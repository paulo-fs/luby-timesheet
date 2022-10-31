import { HTMLProps } from 'react';
import { ChipContainer } from './styles';

interface ChipsProps {
  status: 'pending' | 'approved' | 'disapproved';
  volume: number;
}

export default function Chips({ status, volume }: ChipsProps) {
  const statusText = {
    pending: 'Pendentes',
    approved: 'Aprovados',
    disapproved: 'Reprovados',
  };

  return (
    <ChipContainer status={status}>
      {statusText[status]}
      <span>{volume}</span>
    </ChipContainer>
  );
}
