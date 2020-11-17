import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import Apartment from '../Apartment/Apartment';
import RequestBooking from '../RequestBooking/RequestBooking';

const HomeDetails = () => {
  const [homeDetails, setHomeDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://apartment-hunt-2020.herokuapp.com/getHomeDetails/${id}`)
      .then(response => response.json())
      .then(result => setHomeDetails(result));
  }, [id]);
  return (
    <>
      <Header></Header>
      <Apartment></Apartment>
      <RequestBooking homeDetails={homeDetails}></RequestBooking>
    </>
  );
};

export default HomeDetails;