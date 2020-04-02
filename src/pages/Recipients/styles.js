import styled from 'styled-components';

export const Container = styled.div``;

export const TableContent = styled.table`
  margin-top: 22px;
  font-size: 16px;
  color: #666666;

  border-collapse: separate;
  border-spacing: 0 20px;
  text-align: left;

  max-width: 1200px;
  width: 100%;

  td,
  th {
    padding: 0 20px;
  }

  td {
    background: #fff;
    height: 57px;
  }

  td:first-child,
  td:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  td:last-child,
  td:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }
`;
