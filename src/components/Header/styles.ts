import styled from 'styled-components';

export const HeaderContainer = styled.div<{ width: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 8px;
  position: fixed;
  z-index: 10;
  background-color: #fff;

  @media (max-width: 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  list-style: none;
`;

export const Logo = styled.a`
  margin: 0px ${({ theme }) => theme.spacing * 5}px;
`;
