
import './App.css';
import { Fragment } from 'react';
import Login from "./Login/Login";
import Home from './Home/Home';
// import Nav from './Navigation/Nav';
import Header from './Header/Header';
import { useState, useEffect } from 'react'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log("Before Effect");
  useEffect(() => {
    console.log("In Effect");
    const localStorageData = localStorage.getItem("userLogState");
    if (localStorageData === "LOGGED_IN"){
      setIsLoggedIn(true)
    }
  }, [])
  


  const loginHandler = (email, password)=>{
    console.log(email, password);
    localStorage.setItem('userLogState', "LOGGED_IN");
    setIsLoggedIn(true);

  };

  const logOutHandler = () =>{
    localStorage.removeItem("userLogState");
    setIsLoggedIn(false);
  };
  
  return (
    <Fragment>
      <Header userLogged={isLoggedIn} onLogout={logOutHandler} />
     <main>{!isLoggedIn ?
      <Login  onLogin={loginHandler}/> :
      <Home onLogout={logOutHandler}/>}
     </main>
    </Fragment>
  );
}

export default App;


/**
 * components, state, useState, useRef, props
 * 
 * new topics
 * 1. UseEffect
 * 2. Local Storage
 * 3. useReducer
 * 
 * 1. Card
 */





// https://support.learndesk.us/hc/en-us/articles/4422851070359-LearnDesk-Demo-Resources
// Set an Onboarding and Account Manager Meeting to get started: https://calendly.com/learndesk/onboarding

// https://support.learndesk.us/hc/en-us/articles/4422851070359-LearnDesk-Demo-Resources
// Set an Onboarding and Account Manager Meeting to get started: https://calendly.com/learndesk/onboarding
// LearnDesk Bootcamp designed to train you with LearnDesk Software happens every Thursday 8 AM and 5 PM Pacific Time. Please email vp@learndesk.us to enroll.
// Pricing Information: https://www.learndesk.us/page/pricing
// If you sign up today during or after the demo, you will receive 10% off the Premium Membership. Sign up using this link: https://www.learndesk.us/account/subscription_instructor

// Hi, My name is Minakshi. I am from LearnDesk Onboarding Team. I would like to connect with you 1-1 and discuss how we can help you to grow your business. Please set up an Onboarding Meeting using this link: https://calendly.com/learndesk/onboarding



/**
 * components, state, useState,useRef,props
 *
 * /////new topics/////
 * 1.UseEffect
 * 2.Localstorage
 * 3.useReducer
 *
 * ////////////////
 * 1.Card
 * 2.Button
 * 3.Login page
 * 4.Landing Page
 * 5.Header
 * 6.Navigation
 *
 */
