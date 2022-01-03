import React from 'react';

import Image from 'next/image';

import marketingImg from '../../assets/marketingimg.png';
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import { Divider } from '../common/Divider';
import * as S from './styles';

const MainContent: React.FC = () => {
  const { height } = useWindowDimensions();

  return (
    <S.MainContainer id="home" style={{ height }}>
      <S.Section>
        <S.Title>
          <S.LightTitle>Atraia</S.LightTitle> clientes <br />
          <S.LightTitle>de maneira</S.LightTitle> efetiva <br />
          <S.LightTitle>como nunca visto</S.LightTitle> antes!
        </S.Title>
        <Divider vSpacing={30} />
        <S.LightTitle>
          E o mais incrível é que fazemos isso de maneira automática
          <br /> em mais de 50 mecanismos de busca. Vem com a gente
          <br /> que é sucesso😉.
        </S.LightTitle>
      </S.Section>
      <Image src={marketingImg} priority />
    </S.MainContainer>
  );
};

export default MainContent;
