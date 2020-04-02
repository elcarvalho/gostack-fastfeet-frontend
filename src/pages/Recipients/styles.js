import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div``;

export const NavBar = styled.div`
  margin-top: 34px;

  display: flex;
  justify-content: space-between;

  svg {
    margin-right: 8px;
  }

  div {
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
