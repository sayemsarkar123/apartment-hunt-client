import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = ({setNewUser, onSubmit, facebookSignIn, googleSignIn}) => {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <div className="px-4 py-5 border border-aqua rounded">
            <h5 className="font-weight-bold mb-4 ml-2">Create an account</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="wasValidated">
              <div className="form-group">
                <input ref={register({ required: { value: true, message: 'This field is required' } })} className={`form-control border-top-0 border-left-0 border-right-0 ${errors.fname ? 'is-invalid' : ''}`} placeholder="First Name" type="text" name="fname" />
                <div className="invalid-feedback">{errors.fname?.message}</div>
              </div>
              <div className="form-group mt-4">
                <input ref={register({ required: { value: true, message: 'This field is required' } })} className={`form-control border-top-0 border-left-0 border-right-0 ${errors.lname ? 'is-invalid' : ''}`} placeholder="Last Name" type="text" name="lname" />
                <div className="invalid-feedback">{errors.lname?.message}</div>
              </div>
              <div className="form-group mt-4">
                <input ref={register({ required: { value: true, message: 'This field is required' }, pattern: { value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i, message: 'Enter a valid email' } })} className={`form-control border-top-0 border-left-0 border-right-0 ${errors.email ? 'is-invalid' : ''}`} placeholder="Username or Email" type="email" name="email" />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>
              <div className="form-group mt-4">
                <input ref={register({ required: { value: true, message: 'This field is required' }, pattern: { value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/, message: 'Enter a valid password' } })} className={`form-control border-top-0 border-left-0 border-right-0 ${errors.password ? 'is-invalid' : ''}`} placeholder="Passowrd" type="password" name="password" />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <div className="form-group mt-4 mb-5">
                <input ref={register({ validate: (value) => value === watch('password') || 'The password confirmation does not match' })} className={`form-control border-top-0 border-left-0 border-right-0 ${errors.confirm_password ? 'is-invalid' : ''}`} placeholder="Confrim Passowrd" type="password" name="confirm_password" />
                <div className="invalid-feedback">{errors.confirm_password?.message}</div>
              </div>
              <input style={{backgroundColor: '#275a53'}} className="btn btn-block text-white my-4 rounded-0" type="submit" value="Create an account"/>
            </form>
            <div className="text-center"><span>Already have an account? <Link style={{color: '#275a53'}} onClick={() => setNewUser(false)} className="text-decoration-none" to="#">Login</Link></span></div>
          </div>
          <div className="d-flex align-items-center justify-content-between mt-4">
            <div style={{width: '45%', border: '1px solid #bfbfbf'}}></div>
            <span>Or</span>
            <div style={{width: '45%', border: '1px solid #bfbfbf'}}></div>
          </div>
          <div onClick={facebookSignIn} className="d-flex align-items-center w-75 mx-auto border border-aqua rounded-pill p-1 mt-4 mb-2">
            <img style={{maxWidth: '30px'}} src="https://i.ibb.co/pXCd6g8/Facebook.png" alt=""/>
            <Link to="#" className="mx-auto text-dark text-decoration-none">Continue with Facebook</Link>
          </div>
          <div onClick={googleSignIn} className="d-flex align-items-center w-75 mx-auto border border-aqua rounded-pill p-1">
            <img style={{maxWidth: '30px'}} src="https://i.ibb.co/Vw3rRF7/Google.png" alt=""/>
            <Link to="#" className="mx-auto text-dark text-decoration-none">Continue with Google</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;