import React from 'react';

import Section from '../common/Section';
import Stepper from '../Stepper';

const Work: React.FC = () => {
  return (
    <Section
      title="Como trabalhamos"
      subtitle="Trabalhamos de acordo com suas necessidades e objetivos, mas existem
    passos que seguimos extremamente funcionais que vão levar você às nuvens
    🚀."
      id="work">
      <Stepper />
    </Section>
  );
};

export default Work;
