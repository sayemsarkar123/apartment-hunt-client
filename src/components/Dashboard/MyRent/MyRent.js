import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../../App';
import './myRent.css';

const MyRent = () => {
  const [user, setUser] = useContext(LoginContext);
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
      fetch(`https://apartment-hunt-2020.herokuapp.com/getUserBookings/?email=${user.email}`)
      .then(response => response.json())
      .then(result => setBookings(result))
  }, []);
  return (
    <div >
            <div className="py-2">
               <h4>My Rent</h4>
            </div>
            <div className="d-flex flex-wrap p-5" style={{ height: '460px', overflow: 'auto', backgroundColor: 'rgb(242 247 255)' }}>
                <table className="table p-3 bg-white table-hover text-center" >
                    <thead style={{fontWeight:'500'}}>
                      <tr style={{fontWeight:'500', backgroundColor:'rgb(214 214 214)'}}>
                        <th scope="col">House Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
          <tbody style={{ height: "610px", overflow: 'auto' }}>
            {
              bookings.map(({_id, title, price}) => (
                <tr key={_id} style={{fontWeight:'500'}}>
                      <td>{title}</td>
                      <td>${price}</td>
                      <td className="details-btn btn">View Details</td>
                </tr>
              ))
            }
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyRent;