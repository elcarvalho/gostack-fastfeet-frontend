import styled, { css } from 'styled-components';
import { darken } from 'polished';

export default styled.button`
  align-items: center;
  border: 0;
  background: ${(props) => (props.bgColor ? props.bgColor : '#7d40e7')};
  border-radius: 4px;
  color: #ffffff;
  display: flex;
  font-weight: bold;
  justify-content: center;
  text-transform: uppercase;
  height: 36px;
  width: 112px;
  transition: background 0.2s;

  &:hover {
    ${(props) =>
      props.bgColor
        ? css`
            background: ${darken(0.1, props.bgColor)};
          `
        : css`
            background: ${darken(0.1, '#7d40e7')};
          `};
  }
`;
