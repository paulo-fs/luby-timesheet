import {
  Input,
  InputLabel,
  MakeNotation,
  PrimaryBtn,
  Select,
} from '@/components';
import { useState, Fragment } from 'react';

import { Container } from './styles';

export default function Notation() {
  return (
    <Container>
      <MakeNotation />
    </Container>
  );
}
