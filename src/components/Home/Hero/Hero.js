import React, { useRef } from 'react';

const Hero = ({ setUserSearch }) => {
  const searchRef = useRef();
  const setSearchText = () => setUserSearch(searchRef.current.value);
  return (
    <section style={{backgroundImage: 'linear-gradient(to right, rgba(0 0 0 / 75%) 0%, rgba(0 0 0 / 75%) 100%), url("https://i.ibb.co/HpFvfqW/bg.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="py-5 mt-2">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 mx-auto my-5">
            <div className="row">
              <div className="col-md-12 my-5">
                <h1 className="text-white text-center mb-5">FIND YOUR HOUSE RENT</h1>
                <div className="row">
                  <div className="col-md-9">
                    <input ref={searchRef} onChange={setSearchText} className="form-control" placeholder="Search....." type="text"/>
                  </div>
                  <div className="col-md-3">
                    <button onClick={setSearchText} style={{background: '#275a53'}} className="btn btn-block text-white">Find Now</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;