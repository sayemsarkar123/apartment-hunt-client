import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const company = ["About", "Site Map", "Support Center", "Terms Conditions", "Submit Listing"];
  const links = ["Quick Links", "Rentals", "Sales", "Contact", "Terms Conditions", "Our blog"];
  const icons = [faFacebook, faInstagram, faLinkedinIn, faYoutube];
  return (
    <section className="py-5" style={{backgroundColor: '#275a53'}}>
      <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-2">
            <span className="ml-4" style={{fontSize: '30px', color: '#fff'}}><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
            </div>
            <div className="col-md-10">
              <div>
                <address className="m-0 text-white">H#340 (4th Floor), Road #24, New DOHS, Mohakhali, Dhaka, Bangladesh</address>
                <p className="m-0 text-white">Phone: 018XXXXXXXX</p>
                <p className="m-0 text-white">E-mail: info@company.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
            <h4 className="font-weight-bold text-white mb-4">Company</h4>
            {
              company.map((link, idx) => (
                <Link className="d-block text-white mb-2" key={idx} to="#">{link}</Link>
              ))
            }
        </div>
        <div className="col-md-2">
            <h4 className="font-weight-bold text-white mb-4">Quick Links</h4>
            {
              links.map((link, idx) => (
                <Link className="d-block text-white mb-2" key={idx} to="#">{link}</Link>
              ))
            }
        </div>
        <div className="col-md-4">
          <h4 className="font-weight-bold text-white mb-4 ml-4">About us</h4>
            <p className="text-white ml-4">We are the top real estate agency in Sydney, with agents available to answer any question 24/7.</p>
            <div className="mt-3">
            {
              icons.map((icon, idx) => (
                <Link key={idx} to="#"><span className="ml-4" style={{fontSize: '30px', color: '#fff'}}><FontAwesomeIcon icon={icon} /></span></Link>
              ))
            }
            </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Footer;