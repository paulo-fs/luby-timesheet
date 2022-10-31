import { LabelHTMLAttributes, ReactElement } from 'react';
import { FieldError } from 'react-hook-form';

import mailIcon from '@/shared/assets/icons/Message.svg';
import searchIcon from '@/shared/assets/icons/Search.svg';
import dateIcon from '@/shared/assets/icons/Calendar.svg';
import timeIcon from '@/shared/assets/icons/TimeSquare.svg';
import hideIcon from '@/shared/assets/icons/Hide.svg';
// import showIcon from '@/shared/assets/icons/Show.svg'

import { LabelContainer } from './styles';

const iconSelector = {
  email: mailIcon,
  search: searchIcon,
  password: hideIcon,
  date: dateIcon,
  time: timeIcon,
  none: '',
};

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactElement;
  type: keyof typeof iconSelector;
  error?: FieldError | null;
}

export default function InputLabel({
  children,
  type,
  error = null,
  ...rest
}: Props) {
  return (
    <LabelContainer {...rest}>
      {children}
      <img src={iconSelector[type]} alt="mailInput" />
      {!!error && (
        <div className="error" data-cy={`error-${type}`}>
          {error.message}
        </div>
      )}
    </LabelContainer>
  );
}
