import styled from 'styled-components';

export const NavItem = styled.li`
  font-size: 18px;
  font-weight: 500;
`;

export const NavAnchor = styled.a`
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
  }
`;
