import React from 'react';

import * as S from './styles';

interface ISectionProps {
  id: string;
  title: string;
  subtitle: string;
  bgColor?: string;
  bgPath?: string;
  padding?: number;
}

const Section: React.FC<ISectionProps> = ({
  id,
  subtitle,
  title,
  bgColor,
  bgPath,
  padding,
  children,
}) => {
  return (
    <S.Section id={id} bgColor={bgColor} bgPath={bgPath} padding={padding}>
      <S.SectionTitle>{title}</S.SectionTitle>
      <S.SectionSubTitle>{subtitle}</S.SectionSubTitle>
      {children}
    </S.Section>
  );
};

export default Section;
