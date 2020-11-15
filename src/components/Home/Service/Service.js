import React from 'react';

const Service = ({ service: { title, description, img } }) => {
  const textStyle = { color: '#275a53' };
  return (
    <div className="col-md-4">
      <div className="text-center">
        <img style={{maxWidth: '70px'}} src={img} alt="" />
        <h5 style={textStyle} className="font-weight-bold my-3">{title }</h5>
        <p style={textStyle}>{description}</p>
        <h1>Hello Word!</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>
    </div>
  );
};

export default Service;