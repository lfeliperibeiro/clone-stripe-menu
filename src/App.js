import React from 'react';

import GlobalSyles from './styles/GlobalStyles';
import Layout from './components/Layout';
import Navbar from './components/Navbar';



function App() {
  return (
    <>
      <Layout>
        <Navbar />
      </Layout>
      <GlobalSyles />
    </>

  );
}

export default App;
