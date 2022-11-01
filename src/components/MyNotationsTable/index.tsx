import { Table, TableFooter } from './styles';

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
          <tr>
            <td>10/10/2022</td>
            <td>09:00 - 12:00</td>
            <td>03:00</td>
            <td>Luby Software</td>
            <td>Incubadora JS</td>
            <td>Desenvolvimento</td>
            <td>Pendente</td>
          </tr>
          <tr>
            <td>10/10/2022</td>
            <td>09:00 - 12:00</td>
            <td>03:00</td>
            <td>Luby Software</td>
            <td>Incubadora JS</td>
            <td>Desenvolvimento</td>
            <td>Pendente</td>
          </tr>
        </tbody>
      </Table>
      <TableFooter>
        <p>Páginas</p>
      </TableFooter>
    </>
  );
}
