import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 325px;

  border-radius: 4px;
  background: #fff;
  padding: 60px 30px;

  img {
    width: 100%;
    max-width: 260px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #999;
      margin: 0 0 10px;

      &::placeholder {
        color: #999999;
      }
    }

    label {
      color: #444444;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 9px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#7d40e7')};
      }
    }
  }
`;
