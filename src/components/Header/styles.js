import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  flex: 1;
  height: 64px;
  padding: 0 30px;
  background: #fff;
  border-bottom: 1px solid #dddddd;

  h1 {
    display: flex;
    align-items: center;
    border-right: 1px solid #dddddd;
    padding-right: 30px;
    margin-right: 30px;
    height: 32px;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    position: relative;

    button {
      display: none;
      background: #fff;
      border: none;
    }

    @media (max-width: 900px) {
      margin-left: auto;

      button {
        display: block;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    font-size: 14px;
    height: 100%;
    justify-content: space-around;
    text-align: right;

    strong {
      color: #666666;
    }

    a {
      color: #de3b3b;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }

    button {
      display: none;
      border: none;
      background: #fff;
    }

    @media (max-width: 900px) {
      margin-left: 30px;

      button {
        display: block;
      }

      strong,
      a {
        display: none;
      }
    }
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  background: #fff;

  @media (max-width: 900px) {
    display: ${(props) => (props.showMenu ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: -86px;
    width: 200px;
    align-items: center;
    border: 1px solid #ddd;
    padding: 20px 0;
  }
`;

export const NavLink = styled.li`
  margin-right: 20px;

  a {
    color: ${(props) => (props.active ? '#444444' : '#999999')};
    font-size: 15px;
    font-weight: bold;
    transition: color 0.2s;

    &:hover {
      color: #444444;
    }
  }

  @media (max-width: 900px) {
    margin-right: 0;

    & + li {
      margin-top: 20px;
    }
  }
`;
