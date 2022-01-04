import styled from 'styled-components';

export const WorkSection = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing * 2}px;
`;

export const WorkSectionTitle = styled.h1`
  font-weight: 800;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.primary};
  margin: ${({ theme }) => theme.spacing * 3}px 0px 20px 0px;
  text-align: center;
`;

export const WorkSectionSubTitle = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 300;
  line-height: 27px;
  font-size: 20px;
  text-align: center;
  color: #444;
`;
