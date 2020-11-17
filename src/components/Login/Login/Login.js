import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from '../../../App';
import Header from '../../Home/Header/Header';
import { firebaseConfig } from '../Config/Config';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
export const initializeFirebaseLogin = () => {
  if (firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
  }
}

const Login = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [user, setUser] = useContext(LoginContext);
  const [newUser, setNewUser] = useState(false);

  const updateLoginContext = (result) => {
    const { displayName: name, email, photoURL } = result.user;
    setUser({ ...user, isSignIn: true, name, email, photoURL });
    history.replace(from);
  }

  const updateProfile = (displayName) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({displayName})
  }

  const onSubmit = data => {
    const { fname, lname, email, password } = data;
    if (!newUser) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => updateLoginContext(result))
        .catch(() => alert(`The email or password you entered isn't correct. Try entering it again.`));
    }
    if (newUser) {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          updateProfile(`${fname} ${lname}`);
          alert('Account successfully created');
        })
        .catch(error => alert(error.message));
    }
  };

  const signInWithProvider = (provider) => {
    firebase.auth().signInWithPopup(provider)
      .then(result => updateLoginContext(result))
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