import styled, { css } from 'styled-components';

export const Section = styled.div<{
  bgColor?: string;
  bgPath?: string;
  padding?: number;
}>`
  padding: ${({ padding }) => padding}px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing * 2}px;
  ${({ bgColor, bgPath }): any => {
    if (bgColor) {
      return css`
        background-color: ${bgColor || '#fff'};
      `;
    }
    if (bgPath) {
      return css`
        background: url(${bgPath}) no-repeat;
        background-size: cover;
      `;
    }
  }};
`;
