import React from 'react';

import * as S from './styles';

const Stepper: React.FC = () => {
  return (
    <S.StepperHorizontal>
      <S.Step>
        <S.StepCircle>
          <span>1</span>
        </S.StepCircle>
        <S.StepTitle>ANÁLISE DE PRESENÇA</S.StepTitle>
        <S.StepBarRight />
      </S.Step>
      <S.Step>
        <S.StepCircle>
          <span>2</span>
        </S.StepCircle>
        <S.StepTitle>CORREÇÃO DE PRESENÇA</S.StepTitle>
        <S.StepBarLeft />
        <S.StepBarRight />
      </S.Step>
      <S.Step>
        <S.StepCircle>
          <span>3</span>
        </S.StepCircle>
        <S.StepTitle>MANUTENÇÃO DE PRESENÇA</S.StepTitle>
        <S.StepBarLeft />
        <S.StepBarRight />
      </S.Step>
      <S.Step>
        <S.StepCircle>
          <span>4</span>
        </S.StepCircle>
        <S.StepTitle>ANÁLISE DE RESULTADOS</S.StepTitle>
        <S.StepBarLeft />
      </S.Step>
    </S.StepperHorizontal>
  );
};

export default Stepper;
