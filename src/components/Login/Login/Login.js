import React, { useContext, useState } from 'react';
import Header from '../../Home/Header/Header';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../Config/Config';
import { LoginContext } from '../../../App';

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const [user, setUser] = useContext(LoginContext);
  const onSubmit = data => console.log(data);
  const [newUser, setNewUser] = useState(false);

  const signInWithProvider = (provider) => {
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const { displayName: name, email, photoURL: photo } = result.user;
        setUser({ ...user, name, email, photo });
      })
      .catch(error => console.log(error));
  }
  const googleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithProvider(provider);
  }
  const facebookSignIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    signInWithProvider(provider);
  }
  return (
    <>
      <Header></Header>
      {
        newUser ? <SignUp googleSignIn={googleSignIn} facebookSignIn={facebookSignIn} onSubmit={onSubmit} setNewUser={setNewUser}></SignUp> : <SignIn googleSignIn={googleSignIn} facebookSignIn={facebookSignIn} onSubmit={onSubmit} setNewUser={setNewUser}></SignIn>
      }
    </>
  );
};

export default Login;