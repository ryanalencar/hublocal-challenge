import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  font-weight: 800;
  text-align: left;
  color: #fff;
`;

export const LightTitle = styled.span`
  color: #fff;
  text-align: left;
  font-weight: 400;
  line-height: 30px;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing * 5}px;
`;

export const MainContainer = styled.div`
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: ${({ theme }) => theme.spacing}px;
  background: url('../../static/bgPrimary.svg') no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${Title} {
      text-align: center;
    }
    ${LightTitle} {
      text-align: center;
    }
    ${Section} {
      margin: 0;
    }
  }
`;
