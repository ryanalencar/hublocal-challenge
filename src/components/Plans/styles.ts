import styled from 'styled-components';

export const CardArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  grid-gap: 10px;
  margin: ${({ theme }) => theme.spacing * 3}px 0;
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
