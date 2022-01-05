import React from 'react';

import * as S from './styles';

interface INavItemProps {
  label: string;
  href: string;
  slug: string;
  yPos: number;
}
function NavItem({ label, href, slug, yPos }: INavItemProps) {
  const handleClick = (e: any) => {
    e.preventDefault();
    window.scrollTo({ behavior: 'smooth', top: yPos });
  };
  return (
    <S.NavItem>
      <S.NavAnchor href={href} onClick={(e) => handleClick(e)}>
        {label}
      </S.NavAnchor>
    </S.NavItem>
  );
}

export default NavItem;
