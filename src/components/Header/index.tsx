import React from 'react';

import Image from 'next/image';

import logo from '../../assets/logo.png';
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import NavItem from '../NavItem';
import * as S from './styles';

type HeaderLabels = {
  label: string;
  href: string;
  slug: string;
}[];

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 60;

const headerLabels: HeaderLabels = [
  { label: 'Início', href: '#home', slug: 'home' },
  { label: 'Como trabalhamos', href: '#work', slug: 'work' },
  { label: 'Planos', href: '#plans', slug: 'plans' },
  { label: 'Contato', href: '#contacts', slug: 'contacts' },
];

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <S.HeaderContainer width={width}>
      <S.Logo href="#">
        <Image src={logo} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      </S.Logo>
      <S.NavItems>
        {headerLabels.map(({ href, label, slug }) => (
          <NavItem key={slug} href={href} label={label} slug={slug} />
        ))}
      </S.NavItems>
    </S.HeaderContainer>
  );
};

export default Header;
