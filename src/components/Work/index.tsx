import React from 'react';

import { Section, SectionTitle, SectionSubTitle } from '../common/Section';
import Stepper from '../Stepper';

const Work: React.FC = () => {
  return (
    <Section id="work">
      <SectionTitle>Como trabalhamos</SectionTitle>
      <SectionSubTitle>
        Trabalhamos de acordo com suas necessidades e objetivos, mas existem
        passos que seguimos extremamente funcionais que vão levar você às nuvens
        🚀.
      </SectionSubTitle>
      <Stepper />
    </Section>
  );
};

export default Work;
