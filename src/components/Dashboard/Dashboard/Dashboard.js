import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LoginContext } from '../../../App';
import AddHouse from '../AddHouse/AddHouse';
import BookingList from '../BookingList/BookingList';
import apartment from '../logo/apartment 1.png';
import house from '../logo/Group 33351.png';
import logo from '../logo/Logo.png';
import plus from '../logo/plus 1.png';
import MyRent from '../MyRent/MyRent';

const Dashboard = () => {
  const [user, setUser] = useContext(LoginContext);
  const currentLocation = useLocation();
  return (
    <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light ">
                <Link className="navbar-brand" to="/">
                    <img src={logo} height="70" alt="" />
                </Link>
                <div className="ml-auto">
          <p> <img src={user.photoURL} height="25" style={{ borderRadius: '50%' }} alt="" /> &nbsp; {user.name}</p>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row mx-2">
                    <div className="col-md-2 pt-3">
                        <div className="">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">
                                        <img src={apartment} alt="" height="18"/> &nbsp;
                                        Booking List<span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/addHouse">
                                    <img src={plus} alt="" height="18"/> &nbsp;
                                        Add House
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard/myRent">
                                      <img src={house} alt="" height="18"/>   &nbsp;
                                        My Rent
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-md-10">
                        {
                            currentLocation.pathname === '/dashboard'
                            &&
                            <BookingList></BookingList>
                        }
                        {
                            currentLocation.pathname === '/dashboard/addHouse'
                            &&
                            <AddHouse></AddHouse>
                        }
                        {
                            currentLocation.pathname === '/dashboard/myRent'
                            &&
                            <MyRent></MyRent>
                        }
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Dashboard;