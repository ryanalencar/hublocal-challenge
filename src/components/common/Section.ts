import styled from 'styled-components';

export const Section = styled.div<{ bgColor?: string }>`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing * 2}px;
  background-color: ${({ bgColor }) => bgColor || '#fff'};
`;
