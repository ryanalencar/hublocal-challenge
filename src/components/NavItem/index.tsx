import React from 'react';

import * as S from './styles';

interface INavItemProps {
  label: string;
  href: string;
}
function NavItem({ label, href }: INavItemProps) {
  return (
    <S.NavItem>
      <S.NavAnchor href={href}>{label}</S.NavAnchor>
    </S.NavItem>
  );
}

export default NavItem;
