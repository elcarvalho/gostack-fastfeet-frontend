import styled from 'styled-components';

export default styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #444444;
  }

  .groupButtons {
    display: flex;

    button + button {
      margin-left: 15px;
    }
  }
`;
