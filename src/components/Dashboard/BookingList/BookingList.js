import React, { useEffect, useState } from 'react';

const BookingList = () => {
  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
      fetch(`http://localhost:4001/getBookings`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  },[])
  return (
        <div >
            <div className="py-2">
               <h4>Booking List</h4>
            </div>
            <div className="d-flex flex-wrap p-5" style={{ height: '460px', overflow: 'auto', backgroundColor: 'rgb(242 247 255)' }}>
                <table className="table p-3 bg-white table-hover" >
                    <thead style={{fontWeight:'500'}}>
                      <tr style={{fontWeight:'500', backgroundColor:'rgb(214 214 214)'}}>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Message</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody style={{ height: "610px", overflow: 'auto'}}>
                      {
                        data.map((bookingInfo, index) =>
                              <tr style={{fontWeight:'500'}}>
                              <td>{bookingInfo.name}</td>
                              <td>{bookingInfo.email}</td>
                              <td>{bookingInfo.phone}</td>
                              <td style={{ maxWidth: '150px' }}>{bookingInfo.message}</td>
                              <td>
                                <select className="custom-select mr-5">
                                  <option value="Pending" defaultValue style={{ color: '#FF4545' }}>{bookingInfo.status}</option>
                                  <option value="Ongoing">Ongoing</option>
                                  <option value="Done">Done</option>
                                </select>
                              </td>
                          </tr>
                        )
                      }
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default BookingList;