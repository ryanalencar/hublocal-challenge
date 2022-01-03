import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing}px;
  background-color: aliceblue;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing * 5}px;
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

export const LightTitle = styled.span`
  text-align: left;
  font-weight: 300;
`;
