import React from 'react';

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlinePhone,
} from 'react-icons/ai';

import { Divider } from '../common/Divider';
import * as S from './styles';

const ContactList: React.FC = () => {
  return (
    <S.ContactContainer>
      <S.ContactItem
        href="https://www.instagram.com/hub.local/?hl=pt"
        target="_blank">
        <AiOutlineInstagram size={40} />
        <Divider hSpacing={5} />
        @hub.local
      </S.ContactItem>
      <Divider vSpacing={15} />
      <S.ContactItem
        href="https://www.linkedin.com/company/hublocaloficial"
        target="_blank">
        <AiOutlineLinkedin size={40} />
        <Divider hSpacing={5} />
        HubLocal
      </S.ContactItem>
      <Divider vSpacing={20} />
      <S.ContactItem
        href="https://www.facebook.com/HubLocalOficial/"
        target="_blank">
        <AiOutlineFacebook size={40} />
        <Divider hSpacing={5} />
        @HubLocalOficial
      </S.ContactItem>
      <Divider vSpacing={20} />
      <S.ContactItem href="tel:08009441340">
        <AiOutlinePhone size={40} />
        <Divider hSpacing={5} />
        0800 944 1340
      </S.ContactItem>
      <Divider vSpacing={20} />
    </S.ContactContainer>
  );
};

export default ContactList;
