import styled from 'styled-components';

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: ${({ theme }) => theme.spacing * 5}px auto;
`;

export const ContactItem = styled.a`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
  font-size: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
