import styled from 'styled-components';

export default styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #666666;

  p {
    margin-bottom: 5px;
  }

  strong {
    color: #444444;
    margin-top: 5px;
    padding: 10px 0;

    &:nth-child(n + 2) {
      border-top: 1px solid #eeeeee;
    }
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;

    img {
      width: 100%;
      max-width: 235px;
    }
  }
`;
