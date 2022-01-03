import styled from 'styled-components';

interface IDividerProps {
  vSpacing?: number;
  hSpacing?: number;
}

export const Divider = styled.div<IDividerProps>`
  margin: ${({ vSpacing = 0, hSpacing = 0 }) => `${vSpacing}px ${hSpacing}px`};
`;
