import styled from 'styled-components';
import { Form } from '@unform/web';

export const RecipientForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;

  section {
    display: flex;
    flex-wrap: wrap;

    & + section {
      margin-top: 10px;
    }

    label {
      display: flex;
      flex-direction: column;
      font-size: 16px;
      flex: 1;

      &.width-150 {
        max-width: 150px;

        @media (max-width: 768px) {
          max-width: 100%;
        }
      }

      & + label {
        margin-left: 14px;
      }

      strong {
        color: #444444;
        font-size: 14px;
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

      @media (max-width: 768px) {
        &:last-child {
          margin-left: 0;
        }
      }

      @media (max-width: 570px) {
        & + label {
          margin-left: 0;
          margin-top: 10px;
        }
      }
    }
  }

  input.hidden {
    display: none;
  }
`;
