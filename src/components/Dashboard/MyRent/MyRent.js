import React from 'react';
import './myRent.css';

const MyRent = () => {
  return (
    <div >
            <div className="py-2">
               <h4>Add Rent House</h4>
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
                    <tbody style={{ height: "610px", overflow: 'auto'}}>
                        <tr style={{fontWeight:'500'}}>
                          <td>Luxury Vila</td>
                          <td>$1200</td>
                          <td className="details-btn btn">View Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default MyRent;