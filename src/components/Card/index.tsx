import React from 'react';

import Image from 'next/image';
import { AiOutlineCheck } from 'react-icons/ai';

import hubMarker from '../../assets/hubmarker.png';
import hubWhiteMarker from '../../assets/hubwhitemarker.png';
import theme from '../../styles/theme';
import { Divider } from '../common/Divider';
import * as S from './styles';

interface ICardProps {
  planName: string;
  enterprise?: boolean;
  checklist: string[] | undefined;
}

const Card = ({ planName, enterprise = false, checklist }: ICardProps) => {
  return (
    <S.CardContainer enterprise={enterprise}>
      <S.CardHeader>
        <Image src={enterprise ? hubWhiteMarker : hubMarker} />
        <S.CardTitle>
          <span>Hub</span> {planName}
        </S.CardTitle>
      </S.CardHeader>
      <S.CardContent>
        {checklist?.map((item) => (
          <>
            <S.CardItems key={item}>
              <AiOutlineCheck color={theme.colors.secondary} size={20} />
              <Divider hSpacing={5} />
              <S.CardItemTitle>{item}</S.CardItemTitle>
            </S.CardItems>
            <Divider vSpacing={10} />
          </>
        ))}
        {enterprise && (
          <S.CardParagraph>
            Ideal para rede de empresas com múltiplas unidades de negócios e
            pontos de vendas.
          </S.CardParagraph>
        )}
      </S.CardContent>
    </S.CardContainer>
  );
};

export default Card;
