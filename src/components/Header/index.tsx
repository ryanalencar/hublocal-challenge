import React from 'react';

import Image from 'next/image';

import logo from '../../assets/logo.png';
import NavItem from '../NavItem';
import * as S from './styles';

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 60;

type HeaderLabels = { label: string; href: string }[];

const headerLabels: HeaderLabels = [
  { label: 'Início', href: '#' },
  { label: 'Como trabalhamos', href: '#' },
  { label: 'Planos', href: '#' },
  { label: 'Contato', href: '#' },
];

const Header: React.FC = () => {
  return (
    <S.HeaderContainer>
      <S.Logo href="#">
        <Image
          src={logo}
          width={IMAGE_WIDTH}
          height={IMAGE_HEIGHT}
          layout="intrinsic"
        />
      </S.Logo>
      <S.NavItems>
        {headerLabels.map(({ href, label }) => (
          <NavItem href={href} label={label} />
        ))}
      </S.NavItems>
    </S.HeaderContainer>
  );
};

export default Header;
