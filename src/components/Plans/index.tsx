import React from 'react';

import Card from '../Card';
import Section from '../common/Section';
import * as S from './styles';

type PlansCard = {
  planName: string;
  enterprise?: boolean;
  checklist: {
    slug: string;
    label: string;
  }[];
}[];

const plansCard: PlansCard = [
  {
    planName: 'start',
    checklist: [
      { label: 'cadastro mapas e listas', slug: 'cadastro-mapas-e-listas' },
      { label: 'acesso ao gerenciador', slug: 'acesso-ao-gerenciador' },
    ],
  },
  {
    planName: 'standard',
    checklist: [
      { label: 'tudo do plano start', slug: 'tudo-do-plano-start' },
      { label: 'operador de suporte', slug: 'operador-de-suporte' },
      { label: 'atualização semanal', slug: 'atualizacao-semanal' },
      { label: 'publicação de conteúdos', slug: 'publicacao-de-conteudos' },
      { label: 'gestão e avaliação', slug: 'gestao-e-avaliacao' },
    ],
  },
  {
    planName: 'premium',
    checklist: [
      { label: 'tudo do plano standard', slug: 'tudo-do-plano-standard' },
      { label: 'registro de chamadas', slug: 'registro-de-chamadas' },
      { label: 'gravação de ligações', slug: 'gravacao-de-ligacoes' },
      {
        label: 'alertas de ligações perdidas',
        slug: 'alertas-de-ligacoes-perdidas',
      },
      { label: 'registro de rotas', slug: 'registro-de-rotas' },
      { label: 'mapa de origem de rotas', slug: 'mapa-de-origem-de-rotas' },
      { label: 'business inteliggence', slug: 'business-inteliggence' },
    ],
  },
  {
    planName: 'enterprise',
    enterprise: true,
    checklist: [{ label: 'plano customizável', slug: 'plano-customizavel' }],
  },
];

const Plans: React.FC = () => {
  return (
    <Section
      title="Planos"
      subtitle="Planos personalizados de acordo com as suas necessidades. Vem com a
    gente que realizamos seu pedido"
      padding={10}
      id="plans"
      bgPath="./static/bgSecondary.svg">
      <S.CardArea>
        {plansCard.map(({ planName, enterprise, checklist }) => (
          <Card
            key={planName}
            planName={planName}
            enterprise={enterprise || false}
            checklist={checklist}
          />
        ))}
      </S.CardArea>
    </Section>
  );
};

export default Plans;
