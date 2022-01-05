import styled, { css } from 'styled-components';

export const SectionTitle = styled.h1`
  font-weight: 800;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing * 3}px 0px 20px 0px;
  text-align: center;
`;

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

export const SectionSubTitle = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  line-height: 27px;
  font-size: 20px;
  text-align: center;
  color: #444;
`;
