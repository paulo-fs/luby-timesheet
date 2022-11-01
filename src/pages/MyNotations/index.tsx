import { Chips, MyNotationsTable } from '@/components';
import { Container, HeaderContainer } from './styles';

export default function MyNotations() {
  return (
    <Container>
      <HeaderContainer>
        <div className="title">
          <h1>Meus apontamentos</h1>
          <div className="chips">
            <Chips volume={5} status="approved" />
            <Chips volume={5} status="pending" />
            <Chips volume={5} status="disapproved" />
          </div>
        </div>

        <div className="data">
          <div>
            <p>
              Horários lançados: <span>8h</span>
            </p>
          </div>
          <div>
            <p>
              Total de horas lançadas no mês: <span>120h</span>
            </p>
            <p>
              Total de horas aprovadas: <span>100h</span>
            </p>
          </div>
        </div>
      </HeaderContainer>

      <MyNotationsTable />
    </Container>
  );
}
