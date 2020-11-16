import React, { useState } from 'react';
import Header from '../../Home/Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

const Login = () => {
  const onSubmit = data => console.log(data);
  const [newUser, setNewUser] = useState(false);
  return (
    <>
      <Header></Header>
      {
        newUser ? <SignUp onSubmit={onSubmit} setNewUser={setNewUser}></SignUp> : <SignIn onSubmit={onSubmit} setNewUser={setNewUser}></SignIn>
      }
    </>
  );
};

export default Login;