import styled from 'styled-components';

export const NavItem = styled.li`
  color: #000;
  font-size: 18px;
  font-weight: 300;
`;

export const NavAnchor = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
`;
