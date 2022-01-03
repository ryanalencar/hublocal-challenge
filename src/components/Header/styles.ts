import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 8px;
  margin-bottom: ${({ theme }) => theme.spacing}px;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  margin-left: ${({ theme }) => theme.spacing * 2}px;
`;

export const Logo = styled.a`
  margin: 0px ${({ theme }) => theme.spacing * 5}px;
`;
