import React from 'react';
import {auth, provider}from '../firebase-config';
import{signInWithPopup} from "firebase/auth";
import{useNavigate}from 'react-router-dom';




// setIsAuth is a function 
function Login({setIsAuth}) {

    // redirect to home when login 
    // when you want to redirect to another page, call this function 
    let navigate=useNavigate();




    // popup function 
    const signInWithGoogle= ()=>{
        signInWithPopup(auth, provider).then((result)=>{

            // close the popup window and still login, create a item in localstorage called isAuth and set ture
            localStorage.setItem("isAuth", true);

            // basically set ture means you log in 
            setIsAuth(true);

            // redirect to Home page after login 
            navigate("/");


        })
    } ;
  return (
    <div className="loginPage">
        <p>Sign In With Google to Continue</p>

        {/* add signInWithGoogle function to btn onClick  */}
        <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>

    </div>
  )
}

export default Login;