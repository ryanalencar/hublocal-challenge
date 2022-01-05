import React, { useState } from 'react';

import Image from 'next/image';

import logo from '../../assets/logo.png';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import useWindowDimensions from '../../hooks/useWindowsDimensions';
import NavItem from '../NavItem';
import * as S from './styles';

type HeaderLabels = {
  label: string;
  href: string;
  slug: string;
  yPos: number;
}[];

const headerLabels: HeaderLabels = [
  { label: 'Início', href: '#home', slug: 'home', yPos: 0 },
  { label: 'Como trabalhamos', href: '#work', slug: 'work', yPos: 882 },
  { label: 'Planos', href: '#plans', slug: 'plans', yPos: 1279 },
  { label: 'Contato', href: '#contacts', slug: 'contact', yPos: 1801 },
];

const IMAGE_WIDTH = 180;
const IMAGE_HEIGHT = 60;

const Header: React.FC = () => {
  const { width } = useWindowDimensions();
  const [scrollPos, setScrollPos] = useState(0);
  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      setScrollPos(currPos.y);
    },
    [scrollPos],
  );
  return (
    <S.HeaderContainer width={width} scrollPos={scrollPos}>
      <S.Logo href="#">
        <Image src={logo} width={IMAGE_WIDTH} height={IMAGE_HEIGHT} />
      </S.Logo>
      <S.NavItems>
        {headerLabels.map(({ href, label, slug, yPos }) => (
          <NavItem
            key={slug}
            href={href}
            label={label}
            slug={slug}
            yPos={yPos}
          />
        ))}
      </S.NavItems>
    </S.HeaderContainer>
  );
};

export default Header;
