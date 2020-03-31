import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: left !important;
  align-items: center;

  span {
    border-radius: 50%;
    margin-right: 5px;
    width: ${(props) => (props.size ? props.size : 16)}px;
    height: ${(props) => (props.size ? props.size : 16)}px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
      display: none;
    }

    ${(props) =>
      props.color &&
      css`
        background: ${lighten(0.2, props.color)};
        color: ${darken(0.2, props.color)};
      `}
  }
`;
