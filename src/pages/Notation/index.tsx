import { Input, InputLabel, PrimaryBtn, Select } from '@/components';
import { useState, Fragment } from 'react';

import { Container } from './styles';

const clients = [
  { id: 1, name: 'Incubadora JS' },
  { id: 2, name: 'Incubadora C#' },
  { id: 3, name: 'Multi' },
  { id: 4, name: 'Banco X' },
];

export default function Notation() {
  return (
    <Container>
      <div className="fields">
        <div className="selects flex-column">
          <Select />
          <Select />
        </div>

        <div className="date-infos flex-column">
          <div className="date">
            <p className="margin-bottom">Data</p>
            <Input type="date" />
          </div>
          <div className="time">
            <div className="time-start-end">
              <p className="margin-bottom">Hora inicial</p>
              <Input type="time" />
            </div>
            <div className="time-start-end">
              <p className="margin-bottom">Hora final</p>
              <Input type="time" />
            </div>
          </div>
        </div>

        <div className="counting-time">
          <div>
            <p>Total de horas do projeto:</p>
            <p>350h</p>
          </div>
          <div>
            <p>Total de horas utilizadas:</p>
            <p>120h</p>
          </div>
        </div>

        <div className="checkbox">
          <input type="checkbox" name="counted" checked />
          <span>Contabilizado</span>
        </div>

        <PrimaryBtn className="btn">Salvar apontamento</PrimaryBtn>
      </div>

      <div className="notation-text">
        <div className="github">
          <InputLabel type="search">
            <Input type="search" placeholder="Buque um repositório" />
          </InputLabel>
          <Select />
          <PrimaryBtn>Add</PrimaryBtn>
        </div>
        <textarea />
      </div>
    </Container>
  );
}
