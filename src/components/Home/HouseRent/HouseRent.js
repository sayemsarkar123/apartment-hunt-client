import React from 'react';
import House from '../House/House';

const HouseRent = ({ houses }) => {
  const textStyle = { color: '#275a53' };
  return (
    <section className="py-4" style={{backgroundColor: '#f1f6f4'}}>
      <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h6 style={textStyle}>House Rent</h6>
          <h2 style={textStyle} className="font-weight-bold mt-3 mb-5">Discover the latest Rent <br/> available today</h2>
        </div>
        {
          houses.map(house => <House key={house._id} house={house}></House>)
        }
      </div>
    </div>
    </section>
  );
};

export default HouseRent;