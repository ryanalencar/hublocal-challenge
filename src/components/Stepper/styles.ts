import styled from 'styled-components';

export const StepBar = styled.div`
  position: absolute;
  top: 36px;
  height: 1px;
  border-top: 1px solid #dddddd;
`;

export const StepperHorizontal = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  margin: ${({ theme }) => theme.spacing * 5}px auto;
  @media (max-width: 789px) {
    grid-template-columns: 1fr;
    ${StepBar} {
      border-top: none;
    }
  }
`;

export const StepCircle = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  transition: all 0.3s ease;
`;

export const Step = styled.div`
  display: table-cell;
  position: relative;
  padding: 24px;
  transition: all 0.3s ease-in-out;
  &:hover ${StepCircle} {
    transform: scale(1.3);
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.4);
  }
`;

export const StepTitle = styled.div`
  margin-top: 16px;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StepBarRight = styled(StepBar)`
  right: 0;
  left: 50%;
  margin-left: 20px;
`;

export const StepBarLeft = styled(StepBar)`
  left: 0;
  right: 50%;
  margin-right: 20px;
`;
