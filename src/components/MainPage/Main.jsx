import React from 'react';
import Header from './Subcomponents/Header';
import SearchSection from './Subcomponents/SearchSection';
import CompaniesSection from './Subcomponents/CompSection';
import BusinessSection from './Subcomponents/ApSection';
import './Main.css';

const Main = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <SearchSection />
        <CompaniesSection />
        <BusinessSection />
      </main>
    </>
  );
};

export default Main;
