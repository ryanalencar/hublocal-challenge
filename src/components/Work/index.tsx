import React from 'react';

import { Section, SectionTitle, SectionSubTitle } from '../common/Section';
import Stepper from '../Stepper';

const Work: React.FC = () => {
  return (
    <Section id="work">
      <SectionTitle>Como trabalhamos</SectionTitle>
      <SectionSubTitle>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        odio, debitis vitae voluptatum architecto ipsam et explicabo alias
        facilis natus. Reprehenderit recusandae nemo quis exercitationem veniam
        similique, sed velit ea!
      </SectionSubTitle>
      <Stepper />
    </Section>
  );
};

export default Work;
