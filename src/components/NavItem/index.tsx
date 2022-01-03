import React from 'react';

import * as S from './styles';

interface INavItemProps {
  label: string;
  href: string;
  slug: string;
}
function NavItem({ label, href, slug }: INavItemProps) {
  const handleClick = (e: any) => {
    const section = document.getElementById(slug);
    e.preventDefault();
    if (slug) section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
