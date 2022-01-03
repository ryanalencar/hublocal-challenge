import React from 'react';

import Image from 'next/image';

import logo from '../../assets/logo.png';
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import NavItem from '../NavItem';
import * as S from './styles';

type HeaderLabels = { label: string; href: string }[];

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 60;

const headerLabels: HeaderLabels = [
  { label: 'Início', href: '#' },
  { label: 'Como trabalhamos', href: '#' },
  { label: 'Planos', href: '#' },
  { label: 'Contato', href: '#' },
];

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  console.log(width);
  return (
    <S.HeaderContainer width={width}>
      <S.Logo href="#">
        <Image src={logo} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      </S.Logo>
      <S.NavItems>
        {headerLabels.map(({ href, label }) => (
          <NavItem key={label} href={href} label={label} />
        ))}
      </S.NavItems>
    </S.HeaderContainer>
  );
};

export default Header;
