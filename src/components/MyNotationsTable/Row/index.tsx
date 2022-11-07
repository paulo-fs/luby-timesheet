import { useState } from 'react';
import { ReactSVG } from 'react-svg';

import { SecondaryBtn } from '@/components';
import editIcon from '@/shared/assets/icons/EditSquare.svg';

import { Row, RowInfos } from './styles';

export default function TableRow() {
  const [isVisible, setIsVisible] = useState(false);

  function handleInfosVisibility() {
    setIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <Row onClick={handleInfosVisibility}>
        <td>10/10/2022</td>
        <td>09:00 - 12:00</td>
        <td>03:00</td>
        <td>Luby Software</td>
        <td>Incubadora JS</td>
        <td>Desenvolvimento</td>
        <td>Pendente</td>
      </Row>
      {isVisible && (
        <RowInfos onClick={handleInfosVisibility}>
          <td colSpan={6}>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Distinctio, ratione. Repellat sit accusantium alias impedit,
              eveniet quam sequi magni ex quod quidem ratione pariatur molestiae
              quasi quos debitis dolore eos!
            </p>
          </td>
          <td className="action">
            <SecondaryBtn>
              <ReactSVG src={editIcon} />
            </SecondaryBtn>
          </td>
        </RowInfos>
      )}
    </>
  );
}
