import styled from 'styled-components';
import { Form } from '@unform/web';

export const RegisterForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  > label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    & + label {
      margin-top: 20px;
    }

    strong {
      margin-bottom: 7px;
    }

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      color: #666666;
      font-size: 16px;
      padding: 12px 25px;

      &.has-error {
        box-shadow: 0px 1px 6px 3px rgba(222, 59, 59, 0.5);
      }
    }

    span.error {
      padding-top: 7px;
      color: #de3b3b;
      font-size: 14px;
    }
  }

  input.hidden {
    display: none;
  }
`;
