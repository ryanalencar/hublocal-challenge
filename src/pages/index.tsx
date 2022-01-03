import type { NextPage } from 'next';

import Header from '../components/Header';
import MainContent from '../components/MainContent';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <MainContent />
    </>
  );
};

export default Home;
