import React from 'react';

import { Section } from '../common/Section';
import Stepper from '../Stepper';
import * as S from './styles';

const Work: React.FC = () => {
  return (
    <Section id="work">
      <S.WorkSectionTitle>Como trabalhamos</S.WorkSectionTitle>
      <S.WorkSectionSubTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        odio, debitis vitae voluptatum architecto ipsam et explicabo alias
        facilis natus. Reprehenderit recusandae nemo quis exercitationem veniam
        similique, sed velit ea!
      </S.WorkSectionSubTitle>
      <Stepper />
    </Section>
  );
};

export default Work;
