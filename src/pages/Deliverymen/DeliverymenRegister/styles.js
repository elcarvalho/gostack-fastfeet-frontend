import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 0 auto;

  main {
    border-radius: 4px;
    display: flex;
    justify-content: center;
    background: #ffffff;
    margin-top: 20px;
    padding: 30px 30px 40px;

    form {
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
        }
      }
    }
  }
`;
