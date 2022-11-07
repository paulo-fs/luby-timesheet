import { ReactSVG } from 'react-svg';

import iconPrev from '@/shared/assets/icons/Arrow-LeftCircle.svg';
import iconNext from '@/shared/assets/icons/Arrow-RightCircle.svg';

import { ChangePageButton, Table, TableFooter } from './styles';
import TableRow from './Row';

export default function MyNotationsTable() {
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora Inicial - Final</th>
            <th>Total</th>
            <th>Cliente</th>
            <th>Projeto</th>
            <th>Categoria</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
        </tbody>
      </Table>
      <TableFooter>
        <ChangePageButton>
          <ReactSVG src={iconPrev} />
        </ChangePageButton>
        <div>
          <button className="page">1</button>
          <button className="page">2</button>
          <button className="page">3</button>
          <button className="page">4</button>
        </div>
        <ChangePageButton>
          <ReactSVG src={iconNext} />
        </ChangePageButton>
      </TableFooter>
    </>
  );
}
