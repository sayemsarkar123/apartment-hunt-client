import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import HouseRent from '../HouseRent/HouseRent';
import Services from '../Services/Services';

const Home = () => {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <HouseRent></HouseRent>
      <Services></Services>
    </>
  );
};

export default Home;