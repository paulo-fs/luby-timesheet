import { Select, InputLabel, Input, PrimaryBtn } from '@/components';

import { FieldsLeft, NotationContainer, NotationText } from './styles';

export default function MakeNotation() {
  return (
    <NotationContainer>
      <FieldsLeft>
        <div className="selects flex-column">
          <Select />
          <Select />
        </div>

        <div className="date-infos flex-column">
          <div className="date">
            <p className="margin-bottom">Data</p>
            <InputLabel type="date">
              <Input type="date" />
            </InputLabel>
          </div>
          <div className="time">
            <div className="time-start-end">
              <p className="margin-bottom">Hora inicial</p>
              <InputLabel type="time">
                <Input type="time" />
              </InputLabel>
            </div>
            <div className="time-start-end">
              <p className="margin-bottom">Hora final</p>
              <InputLabel type="time">
                <Input type="time" />
              </InputLabel>
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
      </FieldsLeft>

      <NotationText>
        <div className="github">
          <InputLabel type="search">
            <Input type="search" placeholder="Buque um repositório" />
          </InputLabel>
          <Select />
          <PrimaryBtn>Add</PrimaryBtn>
        </div>
        <textarea />
      </NotationText>
    </NotationContainer>
  );
}
