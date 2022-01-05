import React from 'react';

import Section from '../common/Section';
import ContactList from '../ContactList';

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Nossos Contatos"
      subtitle="Fale conosco"
      bgColor="#fff">
      <ContactList />
    </Section>
  );
};

export default Contact;
