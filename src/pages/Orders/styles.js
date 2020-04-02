import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export const StatusTag = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  height: 25px;
  border-radius: 12px;
  padding: 0 5px;
  width: fit-content;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 5px;
  }

  ${(props) => {
    const options = {
      ENTREGUE: '#2CA42B',
      PENDENTE: '#C1BC35',
      RETIRADA: '#4D85EE',
      CANCELADA: '#DE3B3B',
    };

    const status = options[props.status];

    return css`
      color: ${status};
      background: ${lighten(0.3, status)};

      &::before {
        background: ${status};
      }
    `;
  }}
`;

export const Deliveryman = styled.div`
  display: flex;
  align-items: center;
`;
