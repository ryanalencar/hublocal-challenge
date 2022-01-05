import styled from 'styled-components';

export const HeaderContainer = styled.div<{ width: number; scrollPos: number }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 8px;
  position: fixed;
  z-index: 10;
  transition: all 0.3s ease;
  background-color: ${({ scrollPos }) => {
    if (scrollPos < 1 && scrollPos > -882) return 'rgba(0,0,0,.5)';
    if (scrollPos < -881 && scrollPos > -1279) return '#3B3B98';
    if (scrollPos < -1278 && scrollPos > -1801) return '#38ada9';
    if (scrollPos < -1800) return '#0a3d62';
  }};
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
