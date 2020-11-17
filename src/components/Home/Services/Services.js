import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://apartment-hunt-2020.herokuapp.com/getServices')
      .then(response => response.json())
      .then(result => setServices(result));
  }, []);
  const textStyle = { color: '#275a53' };
  return (
    <section className="py-5" style={{backgroundColor: '#f1f6f4'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
          <h6 style={textStyle}>Service</h6>
          <h2 style={textStyle} className="font-weight-bold mt-3 mb-5">We're an agency tailored to all <br/> clients' needs that always delivers</h2>
          </div>
          <div className="col-md-12">
            <div className="row">
              {
                services.map(service => <Service key={service._id} service={service}></Service>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
