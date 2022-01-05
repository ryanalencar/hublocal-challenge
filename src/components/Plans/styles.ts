import styled from 'styled-components';

export const CardArea = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-content: center;
  margin: ${({ theme }) => theme.spacing * 3}px 0;
  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
