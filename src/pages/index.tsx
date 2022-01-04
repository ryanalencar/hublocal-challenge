import type { NextPage } from 'next';

import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Plans from '../components/Plans';
import Work from '../components/Work';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Work />
      <Plans />
    </>
  );
};

export default Home;
