
import './App.css';
import{BrowserRouter as Router, Routes, Route,Link, useNavigate}from 'react-router-dom';
import Home from'./pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import { useState } from "react";
// import ReactDOM from "react-dom/client";
import {signOut} from "firebase/auth";
import { auth } from './firebase-config';



function App() {

  const [isAuth, setIsAuth]= useState(localStorage.getItem("isAuth"));

  // create a function to sign out and pass the function to the btn of logOut 
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      // after signOut clear storage 
      localStorage.clear();

      // set auth is false to not login anymore and redirect to login page
      setIsAuth(false);
      // cannot use useNavigate to redirect coz it can only use inside of router
      window.location.pathname="/login";
      

    })

  }


  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        

        {/* conditional statement: if login, the Login link disapper  
        {!isAuth &&} means if isAuth is not authenticated then show login link  */}
        {/*coding is : {!isAuth &&<Link to="/login">Login</Link>} */}
        {/* but use !isAuth ?   : btn  . means is not authe show login page if auth show btn function */}

        {!isAuth ? (<Link to="/login">Login</Link>) : (
        
        <>
        {/* put createpost Link here, if logout, you won't see createpost page. once you login, you can post */}
        <Link to="/createpost">Create Post</Link>

        <button onClick={signUserOut}>Log Out</button>
        </>
        
        )}
      </nav>
      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
