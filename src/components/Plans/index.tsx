import React from 'react';

import Card from '../Card';
import { Section, SectionSubTitle, SectionTitle } from '../common/Section';
import * as S from './styles';

type PlansCard = {
  planName: string;
  enterprise?: boolean;
  checklist?: string[];
}[];

const plansCard: PlansCard = [
  {
    planName: 'Start',
    checklist: ['cadastro mapas e listas', 'acesso ao gerenciador'],
  },
  {
    planName: 'Standard',
    checklist: [
      'tudo do plano start',
      'operador de suporte',
      'atualização semanal',
      'publicação de conteúdos',
      'gestão e avaliação',
    ],
  },
  {
    planName: 'Premium',
    checklist: [
      'tudo do plano standard',
      'registro de chamadas',
      'gravação de ligações',
      'alertas de ligações perdidas',
      'registro de rotas',
      'mapa de origem de rotas',
      'business inteliggence',
    ],
  },
  {
    planName: 'Enterprise',
    enterprise: true,
    checklist: ['plano customizável'],
  },
];

const Plans: React.FC = () => {
  return (
    <Section padding={10} id="plans" bgPath="./static/bgSecondary.svg">
      <SectionTitle>Planos</SectionTitle>
      <S.CardArea>
        {plansCard.map(({ planName, enterprise, checklist }) => (
          <Card
            key={planName}
            planName={planName}
            enterprise={enterprise}
            checklist={checklist}
          />
        ))}
      </S.CardArea>
      <SectionSubTitle>
        Planos personalizados de acordo com as suas necessidades. Vem com a
        gente que realizamos seu pedido
      </SectionSubTitle>
    </Section>
  );
};

export default Plans;
