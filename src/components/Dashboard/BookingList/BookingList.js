import React, { useEffect, useState } from 'react';
import './bookingList.css';

const BookingList = () => {
  const [data, setData] = useState([])
  console.log(data);
  useEffect(() => {
      fetch(`http://localhost:4000/getBookings`)
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
  },[])
      const handleStatus = (e, id) => {
      const newStatus = e.target.value
      const sendData = { id, newStatus }
      console.log(sendData);

      fetch(`http://localhost:4000/updateStatus`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(sendData)
      })
          .then(res => res.json())
          .then(result => {
              if (result) {
                  window.alert("Status update")
              } else {
                  window.alert("Error update")
              }
          })
  }
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
                        data.map((bookingInfo) =>
                              <tr style={{fontWeight:'500'}}>
                              <td>{bookingInfo.name}</td>
                              <td>{bookingInfo.email}</td>
                              <td>{bookingInfo.phone}</td>
                              <td style={{ maxWidth: '150px' }}>{bookingInfo.message}</td>
                              <td>
                                <select onChange={(e) => handleStatus(e, bookingInfo._id)} className="custom-select mr-5">
                                  {
                                    bookingInfo.status === 'Pending'
                                    &&
                                    <>
                                        <option value="Pending" defaultValue>{bookingInfo.status}</option>
                                        <option value="Ongoing">Ongoing</option>
                                        <option value="Done">Done</option>
                                    </>                                    
                                  }
                                  {
                                    bookingInfo.status === 'Ongoing'
                                    &&
                                    <>
                                      <option value="Ongoing" defaultValue>{bookingInfo.status}</option>
                                      <option value="Done">Done</option>
                                      <option value="Pending">Pending</option>
                                    </>
                                  }
                                  {
                                    bookingInfo.status === 'Done'
                                    &&
                                    <>
                                      <option value="Done" defaultValue>{bookingInfo.status}</option>
                                      <option value="Ongoing">Ongoing</option>
                                      <option value="Pending">Pending</option>
                                    </>
                                  }
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