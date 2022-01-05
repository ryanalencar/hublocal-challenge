import styled from 'styled-components';

export const CardContainer = styled.div<{ enterprise: boolean }>`
  max-width: 257px;
  height: auto;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  background-color: ${({ enterprise, theme }) =>
    enterprise ? theme.colors.primary : '#fff'};
  transition: all 0.3s ease;
  color: ${({ theme, enterprise }) =>
    enterprise ? '#fff' : theme.colors.primary};
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing}px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardTitle = styled.h1`
  text-transform: capitalize;
  margin-left: ${({ theme }) => theme.spacing}px;
  font-size: 20px;
  font-weight: 300;
  span {
    font-weight: 800;
  }
`;

export const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing}px;
`;

export const CardParagraph = styled.p`
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  line-height: 27px;
  margin-top: ${({ theme }) => theme.spacing * 5}px;
`;

export const CardItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CardItemTitle = styled.h3`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
`;
