import type { NextPage } from 'next';

import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Work from '../components/Work';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Work />
    </>
  );
};

export default Home;
