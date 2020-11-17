import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import HouseRent from '../HouseRent/HouseRent';
import Services from '../Services/Services';

const Home = () => {
  const [userSearch, setUserSearch] = useState('');
  const [houses, setHouses] = useState([]);
  const filterHouses = (result) => {
    const re = new RegExp(userSearch, 'i');
    setHouses(result.filter(house => re.test(house.title)));
  }
  useEffect(() => {
    fetch('https://apartment-hunt-2020.herokuapp.com/getHouses')
      .then(response => response.json())
      .then(result => userSearch ?  filterHouses(result): setHouses(result));
  }, [userSearch]);
  return (
    <>
      <Header></Header>
      <Hero setUserSearch={setUserSearch}></Hero>
      <HouseRent houses={houses}></HouseRent>
      <Services></Services>
      <Footer></Footer>
    </>
  );
};

export default Home;