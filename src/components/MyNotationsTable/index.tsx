import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { PrimaryBtn } from '@/components';

import iconPrev from '@/shared/assets/icons/Arrow-LeftCircle.svg';
import iconNext from '@/shared/assets/icons/Arrow-RightCircle.svg';

import { ChangePageButton, RowInfos, Table, TableFooter } from './styles';

export default function MyNotationsTable() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenCloseInfos() {
    setIsOpen((prevState) => !prevState);
  }

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
          <tr onClick={handleOpenCloseInfos}>
            <td>10/10/2022</td>
            <td>09:00 - 12:00</td>
            <td>03:00</td>
            <td>Luby Software</td>
            <td>Incubadora JS</td>
            <td>Desenvolvimento</td>
            <td>Pendente</td>
          </tr>
          <RowInfos>
            <td colSpan={5}>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio, ratione. Repellat sit accusantium alias impedit,
                eveniet quam sequi magni ex quod quidem ratione pariatur
                molestiae quasi quos debitis dolore eos!
              </p>
            </td>
            <td colSpan={2}>
              <div>
                <input type="checkbox" />
                <span>Contabilizado</span>
              </div>
              <PrimaryBtn>Editar</PrimaryBtn>
            </td>
          </RowInfos>

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
