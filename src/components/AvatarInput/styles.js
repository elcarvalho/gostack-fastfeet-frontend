import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    border: 2px dashed #ddd;
    display: flex;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    flex-direction: column;
    cursor: pointer;

    img {
      width: 140px;
      height: 140px;
      border-radius: 50%;
    }

    span {
      font-size: 16px;
      color: #dddddd;
      font-weight: bold;
    }

    input {
      display: none;
    }
  }
`;
