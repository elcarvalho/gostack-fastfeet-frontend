import styled from 'styled-components';
import { darken } from 'polished';

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;

  button {
    border: 0;
    background: #fff;
    padding: 5px;
  }
`;

export const ListAction = styled.nav`
  display: ${(props) => (props.show ? 'block' : 'none')};

  position: absolute;
  background: #fff;
  width: max-content;
  padding: 10px;
  top: 90%;
  box-shadow: 0px 0px 2px #00000026;
  z-index: 10;
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
    width: 0;
    height: 0;
    border: 5px solid #fff;
    transform: rotate(135deg);
    box-shadow: -1px 1px 3px -2px rgba(0, 0, 0, 0.4);
  }

  ul li {
    padding-right: 10px;

    button {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #999999;
      padding: 8px 0;
      transition: color 0.2s;

      &:hover {
        color: ${darken(0.2, '#999999')};
      }
    }

    & + li {
      border-top: 1px solid #eeeeee;
    }

    svg {
      margin-right: 8px;
    }
  }
`;
