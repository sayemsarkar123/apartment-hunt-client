import React from 'react';
import { useHistory } from 'react-router-dom';

const House = ({ house: { _id, name, price, img } }) => {
  const history = useHistory();
  const textStyle = {color: '#275a53'}
  return (
    <div className="col-md-4 mt-4">
      <div className="bg-white">
      <div>
        <img className="img-fluid" src={img} alt={name}/>
      </div>
      <div className="p-3">
        <h5 style={textStyle} className="font-weight-bold">{name}</h5>
        <div className="d-flex align-items-center mt-3">
          <img className="mr-2" style={{maxWidth: '15px'}} src="https://i.ibb.co/8dNZ5M7/map-marker-alt-solid-1.png" alt="" />
          <p className="m-0 text-secondary">Nasirabad H/S, Chattogram</p>
        </div>
        <div className="d-flex align-items-center mt-2">
          <img className="mr-2" style={{ maxWidth: '15px' }} src="https://i.ibb.co/wpT7GMh/bed-1.png" alt="" />
          <h6 className="text-secondary m-0">3 Bedrooms</h6>
          <img className="ml-auto mr-2" style={{ maxWidth: '15px' }} src="https://i.ibb.co/f1XBsjP/bath-1.png" alt="" />
          <h6 className="text-secondary m-0">2 Bathroom</h6>
        </div>
        <div className="d-flex align-items-center mt-4">
          <h3 style={textStyle} className="m-0 font-weight-bold">{`$${price}`}</h3>
          <button onClick={() => history.push(`/details/${_id}`)} style={{background: '#275a53'}} className="btn text-white px-4 ml-auto rounded-0">View Details</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default House;