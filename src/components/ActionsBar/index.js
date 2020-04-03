import styled from 'styled-components';
import { darken } from 'polished';

export default styled.div`
  margin-top: 34px;

  display: flex;
  justify-content: space-between;

  svg {
    margin-right: 8px;
  }

  form {
    display: flex;
    align-items: center;
    background: #fff;
    border: 1px solid #dddddd;
    padding: 0 16px;
    border-radius: 4px;
    width: 237px;
    height: 36;

    input {
      border: 0;
      width: 100%;
    }
  }

  button {
    align-items: center;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    background: #7d40e7;
    width: 142px;
    height: 36px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#7d40e7')};
    }
  }
`;
