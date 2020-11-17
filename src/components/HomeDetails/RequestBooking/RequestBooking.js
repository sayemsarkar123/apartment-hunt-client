import React from 'react';
import { useForm } from 'react-hook-form';

const RequestBooking = ({ homeDetails: { title, price, img } }) => {
  const photoURL = img?.size ? `data:${img.contentType};base64,${img.img}` : img;
  console.log(img);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch('https://apartment-hunt-2020.herokuapp.com/addBooking', {
  method: 'POST',
  body: JSON.stringify({...data, status: 'Pending', title, price}),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
      .then((response) => response.json())
      .then((result) => {
        if (result) alert('Request confirmed successfully')
  })
  };
  const textStyle = { color: '#275a53' };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <div className="row">
            <div className="col-md-12">
              <img className="img-fluid" src={photoURL} alt=""/>
            </div>
            <div className="col-md-12 my-3">
              <div className="row">
                <div className="col-md-3">
                <img className="img-fluid" src={photoURL} alt=""/>
                </div>
                <div className="col-md-3">
                <img className="img-fluid" src={photoURL} alt=""/>
                </div>
                <div className="col-md-3">
                <img className="img-fluid" src={photoURL} alt=""/>
                </div>
                <div className="col-md-3">
                <img className="img-fluid" src={photoURL} alt=""/>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="d-flex justify-content-between">
                <h4 style={textStyle} className="font-weight-bold">{title}</h4>
                <h3 style={textStyle} className="font-weight-bold">${price || 0}</h3>
              </div>
              <p className="text-secondary">3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
              <h5 style={textStyle} className="font-weight-bold">Price Details-</h5>
              <p className="text-secondary">
              Rent/Month: $550 (negotiable) <br/> Service Charge : 8,000/= Tk per month, subject to change <br/> Security Deposit : 3 month’s rent <br/> Flat Release Policy : 3 months earlier notice required
              </p>
              <h5 style={textStyle} className="font-weight-bold">Property Details-</h5>
              <p className="text-secondary">
              Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/> Flat Size : 3000 Sq Feet. <br/> Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/> Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/> Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br/> Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mr-auto">
          <div style={{backgroundColor: '#f4f4f4'}} className="p-3">
            <form className="wasValidated" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input className={`form-control mb-3 ${errors.name ? 'is-invalid' : ''}`} placeholder="Full Name" name="name" type="text" ref={register({ required: true })} />
                <div className="invalid-feedback">
                {errors.name && 'This field is required'}
                </div>
              </div>
              <div className="form-group">
                <input className={`form-control mb-3 ${errors.phone ? 'is-invalid' : ''}`} placeholder="Phone No." type="tel" name="phone" ref={register({ required: true })} />
                <div className="invalid-feedback">
                {errors.phone && 'This field is required'}
                </div>
              </div>
              <div className="form-group">
                <input className={`form-control mb-3 ${errors.email ? 'is-invalid' : ''}`} placeholder="Email Address" type="email" name="email" ref={register({ required: true })} />
                <div className="invalid-feedback">
                {errors.email && 'This field is required'}
                </div>
              </div>
              <div className="form-group">
                <textarea placeholder="Massage" style={{ resize: 'none' }} className={`form-control mb-3 ${errors.message ? 'is-invalid' : ''}`} name="message" cols="30" rows="10" ref={register({ required: true })}></textarea>
                <div className="invalid-feedback">
                {errors.message && 'This field is required'}
                </div>
              </div>
              <input style={{backgroundColor: '#275a53'}} className="btn btn-block text-white" type="submit" value="Request Booking"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestBooking;